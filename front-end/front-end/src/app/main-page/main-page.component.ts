import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../models/Produtos';
import { Categoria } from '../models/Categoria';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  categoria: Categoria

  produto: Produtos = new Produtos()

  listaProdutos: Produtos[]
  
 
  constructor(
    private produtosService :ProdutosService
  ) { }

  ngOnInit() {

  }
  comprar(id: number) {

    if(environment.token == null) {
      alert('Precisa Estar Logado para comprar')
    }
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
      console.log(this.produto)
      this.listaProdutos.push(resp)
    })
    console.log(this.listaProdutos)
    localStorage.setItem('listaProdutos', JSON.stringify(this.listaProdutos))
    return this.listaProdutos
  }
}
