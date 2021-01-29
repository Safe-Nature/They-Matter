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

  produtos: Produtos

  constructor(
    private produtosService: ProdutosService 
  
    
  ) { }

  ngOnInit(){

    this.produtosService.getAllProdutos().subscribe((resp: Produtos)=>{
        this.produtos = resp

    })
  }

}
