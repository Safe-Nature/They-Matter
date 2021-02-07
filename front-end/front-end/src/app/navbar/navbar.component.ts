import { Categoria } from './../models/Categoria';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from './../models/UserLogin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nome = environment.nome
  UserLogin: UserLogin;

  categoria: Categoria[];

  sumir: number=0;
   token = localStorage.getItem('token');


  
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getCategoria().subscribe(resp => this.categoria = resp)
    

    this.trocar();
   
  
  
  }

 trocar(){
  if(this.token==''){
    this.sumir=0
  }else{
    this.sumir=1
  }

 }
  
}
