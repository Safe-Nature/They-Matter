import { Router } from '@angular/router';
import { ProdutosComponent } from './../produtos/produtos.component';
import { tap, map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { Produtos } from './../models/Produtos';
import { Carrinho } from './../models/Carrinho';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaProdutos: Produtos[] = []

  total: number
  
  constructor(
    private produtosService: ProdutosService,
    private router: Router
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
    window.location.reload()
  }
  precoTotal() {
    var pTotal = 0
    for(let preco of this.listaProdutos) {
    pTotal = pTotal + preco.preco
    }
    return pTotal;
  }
}