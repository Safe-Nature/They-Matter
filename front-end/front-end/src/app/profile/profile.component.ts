import { Produtos } from './../models/Produtos';
import { ProdutosService } from './../service/produtos.service';
import { PedidosService } from './../service/pedidos.service';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../models/UserLogin';
import { ConsumoService } from './../service/usuario.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pedidos } from '../models/Pedidos';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userLogin : UserLogin = new UserLogin();
  listaProdutos: Produtos[]
  id = environment.id

  @ViewChild('produto') div: ElementRef;
  @ViewChild('btn') btn: ElementRef;
  
  pedidos: Pedidos[];
  constructor(
    private consumoService: ConsumoService,
    private pedidosService: PedidosService,
    private produtosService: ProdutosService 
  ) { }

  ngOnInit() { 
    window.scroll(0,0)
    this.getPedido()
    console.log(this.listaProdutos)
    
  }

  showProduto() {
  
    if(this.div.nativeElement.hasAttribute('style', 'display:none')) {
      this.div.nativeElement.setAttribute('style', 'display: block')
      this.btn.nativeElement.setAttribute('style', 'display: none')
    } 
  }
  hideProduto(){
    if(this.div.nativeElement.hasAttribute('style', 'display:block')) {
      this.div.nativeElement.setAttribute('style', 'display: none')
      this.btn.nativeElement.setAttribute('style', 'display: block')
    } 
  }
  getPedido() {
    
    this.consumoService.getUser(environment.id).subscribe((resp: UserLogin) =>{
      console.log(resp.location)
      this.userLogin = resp;
    })
  }
}