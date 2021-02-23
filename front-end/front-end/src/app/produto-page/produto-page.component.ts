import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css']
})
export class ProdutoPageComponent implements OnInit {

  produto: Produtos = new Produtos()
  categoria: Categoria = new Categoria()
  listaProdutos: Produtos[] = []
  produtosSilimares: Produtos[] = []
  constructor( private produtosService: ProdutosService, private route: Router, private direction: ActivatedRoute, private alerta: AlertService) { }

  ngOnInit() { 
    window.scroll(0,0)
    let id = this.direction.snapshot.params['id']
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
      console.log(resp.categoria.id)
      this.produtosService.getCategoriaById(resp.categoria.id).subscribe((resp: Categoria) => {
        for(let produto of resp.produtos){
          if(produto.id != this.produto.id) {
            this.categoria.id = resp.id
            this.categoria.nome = resp.nome
            this.produtosSilimares.push(produto) 
          } 
        }
        console.log(this.categoria)
      })
    })
  }
  comprar(id: number) {

    if(environment.token == '') {
      this.alerta.showAlertVerde('Entre com sua conta para comprar')
    } else {
      this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
        this.produto = resp
        console.log(this.produto)
        this.produtosService.listaProdutos.push(resp)
        localStorage.setItem('listaProdutos', JSON.stringify(this.produtosService.listaProdutos))
      })
      
      this.alerta.showAlertVerde('Produto Adicionado ao carrinho')
    }
  }
  loadCatPage(id: number) {
    this.route.navigate([`/categoria/${id}`])
    this.produtosService.getCategoriaById(id).subscribe(resp => this.categoria = resp)
  }
  goToProduto(id: number) {
    this.route.navigate([`/produto/${id}`])
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
      console.log(resp.categoria.id)
      this.produtosService.getCategoriaById(resp.categoria.id).subscribe((resp: Categoria) => {
        this.listaProdutos = []
        for(let produto of resp.produtos){
          if(produto.id != this.produto.id) {
            this.categoria.id = resp.id
            this.categoria.nome = resp.nome
            this.produtosSilimares.push(produto) 
          } 
        }
        console.log(this.categoria)
      })
    })
  }   
}
