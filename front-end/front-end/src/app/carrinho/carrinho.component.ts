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
  
  constructor(
    private produtosService: ProdutosService,
  ) { }

  ngOnInit() {
    this.getListaProdutos()
  }

  getListaProdutos() {
    this.listaProdutos = JSON.parse(localStorage.getItem('listaProdutos')  || '{}');
  }
  //removeProduto(x) {
   // console.log(this.listaProdutos)
   // this.listaProdutos.slice(x, 1)
  //}
}