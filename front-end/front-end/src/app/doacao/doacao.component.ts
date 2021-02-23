import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/Usuarios';
import { Pedidos } from './../models/Pedidos';
import { PedidosService } from './../service/pedidos.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  pedido: Pedidos = new Pedidos();
  usuario: Usuarios = new Usuarios();
  total: number

  valor: string

  constructor(private router: Router ,private pedidosService: PedidosService, private alerta: AlertService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  realizarDoacao() {

    if(environment.token == '') {
      this.alerta.showAlertVerde('É necessário estar logado para doar!')
    } else {
      this.total = parseInt(this.valor, 10)
      console.log(this.total)
      this.pedido.status = 'Doação'
      this.usuario.id = environment.id
      this.pedido.usuarios = this.usuario
      this.pedido.total = this.total
      this.pedido.metodo = 'Á vista'
      this.pedidosService.postPedido(this.pedido).subscribe((resp: Pedidos) => {
        this.pedido = resp
      })
      this.alerta.showAlertVerde('Obrigado pela doação, nós e o planeta agradecemos!')
      this.router.navigate(['/inicio'])
    }

  }
}
