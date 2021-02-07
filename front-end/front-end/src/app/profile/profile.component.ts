import { Usuarios } from '../models/Usuarios';
import { PedidosService } from './../service/pedidos.service';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../models/UserLogin';
import { ConsumoService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedidos';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userLogin : UserLogin = new UserLogin();
  id = environment.id
  
  pedidos: Pedidos[];
  constructor(
    private consumoService: ConsumoService,
    private pedidosService: PedidosService
  ) { }

  ngOnInit() { 
    this.consumoService.getUser(environment.id).subscribe((resp: UserLogin) =>{
      console.log(resp)
      this.userLogin = resp;
    })
  }

  showProduto() {

    
  }
}