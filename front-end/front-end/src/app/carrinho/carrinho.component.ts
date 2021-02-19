import { UserLogin } from './../models/UserLogin';
import { ConsumoService } from 'src/app/service/usuario.service';
import { NavbarService } from './../service/navbar.service';
import { Location } from './../models/Location';
import { Usuarios } from './../models/Usuarios';
import { environment } from './../../environments/environment.prod';
import { PedidosService } from './../service/pedidos.service';
import { Router } from '@angular/router';
import { Produtos } from './../models/Produtos';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedidos';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaProdutos: Produtos[] = []
  pedido: Pedidos = new Pedidos()
  local: Location = new Location()
  usuario: Usuarios = new Usuarios()
  location: Location = new Location()
  listaLocais: Location[] = []

 

  option: number = 0
  total: number
  metodo1: string = "Á vista"
  metodo2: string = "2x"
  metodo3: string = "3x"
  uf: Array<string> = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PP', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
  
  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private pedidosService: PedidosService,
    private navbarService: NavbarService,
    private usuarioService: ConsumoService
    ) 
    {}

  ngOnInit() {
    this.getListaProdutos()
    this.total = this.precoTotal()
    this.navbarService.notifyObservable$.subscribe(res => {
      if(res.refresh == true){
        this.listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')  || '{}');
        this.trocar();
      }
    })
    this.usuarioService.getByIdUser(environment.id).subscribe((resp: Usuarios) => {
      for(let locais of resp.location) {
        this.listaLocais.push(locais)
      }
    })
    console.log(this.listaLocais)
    
  }
  getListaProdutos() {
    this.listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')  || '{}');
  }
  removeProduto(x: number) {

    this.getListaProdutos()
    let index = this.listaProdutos.map( function (e) { return e.id}).indexOf(x)
    console.log( this.listaProdutos.map( function (e) { return e.id}).indexOf(x))
    this.listaProdutos.splice(index, 1)
    console.log(this.listaProdutos)
    localStorage.setItem('listaProdutos', JSON.stringify(this.listaProdutos))
    this.ngOnInit()
  }
  precoTotal() {
    var pTotal = 0
    for(let preco of this.listaProdutos) {
    pTotal = pTotal + preco.preco
    }
    return pTotal;
  }
  trocar() {
    if(this.listaProdutos == []) {
      this.option = 0
    } else {
      this.option = 1;
    }
  }
  realizarPedido() {

    if(environment.token != '') {
      this.pedido.produto = this.listaProdutos
      this.pedido.total = this.total
      this.pedido.status = "Aprovada"
      this.usuario.id = environment.id
      this.pedido.usuarios = this.usuario
      this.pedido.metodo = this.pedido.metodo
      this.location.usuarios = this.usuario
      console.log(this.pedido)
    
        this.pedidosService.postPedido(this.pedido).subscribe((resp: Pedidos) => {
          this.pedido = resp
        })
        alert("Pedido realizado!! Obrigado por comprar conosco!")
        this.router.navigate(['/inicio'])
        for(let produtos of this.listaProdutos) {
          produtos.estoque = (produtos.estoque - 1)
          console.log(produtos.estoque)
          this.produtosService.updateProdutoById(produtos.id, produtos).subscribe((resp: Produtos) => {
            produtos = resp
          })
        }
        localStorage.removeItem('listaProdutos')
      
    } else {
      alert("Você precisa entrar para realizar seu pedido.")
    }
  }
  cadastrarLocal() {

    if(this.location.nome == null && this.location.cep == null && this.location.cidade == null && this.location.uf == null) {
      alert('Favor Inserir todos os campos de endereço para entrega!')
    } else {
      this.usuarioService.postLocation(this.location).subscribe((resp: Location) => {
        this.location = resp
      })
    }
  }
}