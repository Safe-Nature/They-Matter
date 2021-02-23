import { NavbarService } from './../service/navbar.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { AlertService } from '../service/alert.service';

import { Usuarios } from '../models/Usuarios';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConsumoService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { UserLogin } from '../models/UserLogin';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  usuarios: Usuarios = new Usuarios()
  confirmarSenha: string
  Dadosliberados: string
  userLogin: UserLogin = new UserLogin()

  nome = window.document.getElementById('nome')

  @ViewChild("invalid-user") element: ElementRef

  constructor(
    private consumoService: ConsumoService,
    private router: Router,
    private navbarService: NavbarService,
    private alerta: AlertService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  login() {
    this.consumoService.login(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.email = this.userLogin.email

      console.log(environment.token)

      console.log(environment.nome)

      console.log(environment.id)

      console.log(environment.email)

      if (environment.token == null) {

        this.alerta.showAlertVerde('Usuario inválido')

      } else {
        this.navbarService.notifyOther({refresh: true});
        this.router.navigateByUrl('/profile')
      }

    }, erro => {
      if (erro.status == 500) {
        this.alerta.showAlertVerde('E-mail ou senha estão incorretos')
      }
    }
    )
  }

  cadastrar() {
    this.usuarios = this.usuarios
    if (this.usuarios.senha != this.confirmarSenha) {
      this.alerta.showAlertVerde('A senhas estão divergentes.')
    }
    else {
      this.consumoService.cadastrar(this.usuarios).subscribe((resp: Usuarios) => {
        this.usuarios = resp
        this.router.navigate(['/inicio'])
        this.alerta.showAlertVerde('Seu cadastro foi efetudado com sucesso!')
      })

    }
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  LiberaDados(event: any) {
    this.Dadosliberados = event.target.value
  }

  confirmEmail(event: any) {
    this.confirmEmail = event.target.value
  }

}






