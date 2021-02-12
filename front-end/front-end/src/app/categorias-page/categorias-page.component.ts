import { Produtos } from './../models/Produtos';
import { Categoria } from './../models/Categoria';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categorias-page',
  templateUrl: './categorias-page.component.html',
  styleUrls: ['./categorias-page.component.css']
})
export class CategoriasPageComponent implements OnInit {

  categoria: Categoria

  produto: Produtos = new Produtos()

  listaProdutos: Produtos[] = []

  
  
  constructor(
    private router: Router,
    private direction: ActivatedRoute,
    private produtoService: ProdutosService
  ) {  }

  ngOnInit() {
    let id = this.direction.snapshot.params['id']
    this.produtoService.getCategoriaById(id).subscribe(resp => this.categoria = resp)
    
  }
  loadCatPage(id: number) {
    this.router.navigate([`/categoria/${id}`])
    this.ngOnInit()
  }
  comprar(id: number) {

    if(environment.token == '') {
      alert('Entre com sua conta para comprar')
    } else {
      this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
        this.produto = resp
        console.log(this.produto)
        this.produtoService.listaProdutos.push(resp)
        localStorage.setItem('listaProdutos', JSON.stringify(this.produtoService.listaProdutos))
      }) 
      alert('Produto Adicionado ao carrinho')
    }
   
  }   
 
}
