import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';

import { ConsumoService } from './../service/consumo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  Dadosliberados: string

  public userEndPoint = 'http://localhost:8081/usuario'

  constructor(
    private consumoService: ConsumoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  login() {

  }
  cadastrar() {
    this.usuario = this.usuario
    if (this.usuario.senha != this.confirmarSenha) {
      alert('A senhas estão divergentes.')
    }
    else {
      this.consumoService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        alert('Seu cadastro foi efetudado com sucesso!')
      })

    }

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  LiberaDados(event: any) {
    this.Dadosliberados = event.target.value
  }


}
