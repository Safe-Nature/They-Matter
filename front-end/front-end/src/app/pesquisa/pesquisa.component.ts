import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../models/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  produto: Produtos = new Produtos()
  listaPesquisa: Produtos[]
  listaProdutos: Produtos[]
  nomeProd: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService
  ) { 
  }

  ngOnInit(){
    this.nomeProd = this.route.snapshot.params['busca']
    this.findByNomeProduto(this.nomeProd)
    console.log(this.nomeProd)
  }

  findByNomeProduto(nome: string){
    this.produtoService.getByNomeProdutos(nome).subscribe((resp: Produtos[]) =>{
      this.listaPesquisa = resp
      console.log(this.listaPesquisa)
    })
  }

  comprar(id: number) {

    if(environment.token == null) {
      alert('Precisa Estar Logado para comprar')
    }
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produto = resp
      this.listaProdutos.push(resp)
    })
    console.log(this.listaProdutos)
    localStorage.setItem('listaProdutos', JSON.stringify(this.listaProdutos))
    return this.listaProdutos
  }

}
