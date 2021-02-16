import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/Produtos';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css']
})
export class ProdutoPageComponent implements OnInit {

  produto: Produtos = new Produtos

  constructor( private produtosService: ProdutosService, private route: Router, private direction: ActivatedRoute,) { }

  ngOnInit() {
    let id = this.direction.snapshot.params['id']
    this.produtosService.getByIdProdutos(id).subscribe(resp => this.produto = resp)
  }
  comprar(id: number) {

    if(environment.token == '') {
      alert('Entre com sua conta para comprar')
    } else {
      this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
        this.produto = resp
        console.log(this.produto)
        this.produtosService.listaProdutos.push(resp)
        localStorage.setItem('listaProdutos', JSON.stringify(this.produtosService.listaProdutos))

      })
      
      alert('Produto Adicionado ao carrinho')
    }
  }  
}
