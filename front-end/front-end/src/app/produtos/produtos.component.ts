import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../models/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[]
  produto: Produtos = new Produtos
  listaProdutos: Produtos[] = []
  
  constructor(
    private produtosService: ProdutosService ,
  ) { }

  ngOnInit(){
    this.produtosService.getAllProdutos().subscribe(resp => this.produtos = resp)
  }

  comprar(id: number) {

    if(environment.token == '') {
      alert('Entre com sua conta para comprar')
    } else {
      this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
        this.produto = resp
        console.log(this.produto)
        this.listaProdutos.push(resp)
        localStorage.setItem('listaProdutos', JSON.stringify(this.listaProdutos))
      }) 
      alert('Produto Adicionado ao carrinho')
    }
   
  }  
}
