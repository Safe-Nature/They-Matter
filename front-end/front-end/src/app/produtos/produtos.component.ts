import { Categoria } from './../models/Categoria';
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
  categoria: Categoria
  
  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.produtosService.getAllProdutos().subscribe(resp => this.produtos = resp)
  }
  loadCatPage(id: number) {
    this.router.navigate([`/categoria/${id}`])
    this.produtosService.getCategoriaById(id).subscribe(resp => this.categoria = resp)
  }
  goToProduto(id: number) {
    this.router.navigate([`/produto/${id}`])
  }
}
