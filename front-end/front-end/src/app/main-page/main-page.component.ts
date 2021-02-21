import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../models/Produtos';
import { Categoria } from '../models/Categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],

})
export class MainPageComponent implements OnInit {

  categoria: Categoria

  produto: Produtos = new Produtos()

  listaProdutos: Produtos[]


  constructor(
    private produtosService: ProdutosService, private router: Router,
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  goToProduto(id: number) {
    this.router.navigate([`/produto/${id}`])
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
      console.log(resp.categoria.id)
      this.produtosService.getCategoriaById(resp.categoria.id).subscribe((resp: Categoria) => {
        this.listaProdutos = []
        for(let produto of resp.produtos){
          if(produto.id != this.produto.id) {
            this.categoria.id = resp.id
            this.categoria.nome = resp.nome
            this.listaProdutos.push(produto) 
          } 
        }
        console.log(this.categoria)
      })
    })
  }   
}