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

  usuario: Usuarios = new Usuarios()

  total: number
  
  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {
    this.getListaProdutos()
    this.total = this.precoTotal()
    
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
  realizarPedido() {

    if(environment.token != '') {
      this.pedido.produto = this.listaProdutos
      this.pedido.total = this.total
      this.pedido.status = "Aprovada"
      this.usuario.id = environment.id
      this.pedido.usuarios = this.usuario
      console.log(this.pedido)
  
      this.pedidosService.postPedido(this.pedido).subscribe((resp: Pedidos) => {
        this.pedido = resp
      })
      
      for(let produtos of this.listaProdutos) {
        produtos.estoque = (produtos.estoque - 1)
        console.log(produtos.estoque)
        this.produtosService.updateProdutoById(produtos.id, produtos).subscribe((resp: Produtos) => {
          produtos = resp
        })
      }
      alert("Pedido realizado!! Obrigado por comprar conosco!")
      localStorage.removeItem('listaProdutos')
      this.router.navigate(['/inicio'])
    } else {
      alert("Você precisa entrar para realizar seu pedido.")
    }
  }
}