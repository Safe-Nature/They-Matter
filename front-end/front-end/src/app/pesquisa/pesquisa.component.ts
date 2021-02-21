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
  
  nomeProd: string
  loading = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService
  ) { 
  }

  ngOnInit(){
    window.scroll(0,0)
    this.route.params.subscribe(
        params => {
          this.nomeProd = params['busca']
          this.findByNomeProduto(this.nomeProd)
          console.log(this.nomeProd)
        }
    );
      }

  findByNomeProduto(nome: string){
    this.loading = true
    this.produtoService.getByNomeProdutos(nome).subscribe((resp: Produtos[]) =>{
      this.listaPesquisa = resp
      this.loading = false
      console.log(this.listaPesquisa)
    })
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
