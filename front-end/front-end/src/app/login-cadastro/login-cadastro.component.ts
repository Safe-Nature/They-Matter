import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';

import { ConsumoService } from './../service/consumo.service';
import { Router } from '@angular/router';
import { UserLogin } from '../models/UserLogin';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  Dadosliberados: string
  userLogin : UserLogin = new UserLogin()


  constructor(
    private consumoService: ConsumoService,
    private router: Router


  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  login(){
    this.consumoService.login(this.userLogin).subscribe((resp : UserLogin)=>{
      this.userLogin= resp
     environment.token = this.userLogin.token
     environment.nome = this.userLogin.nome
     environment.id = this.userLogin.id
     environment.email = this.userLogin.email

     //console.log(environment.token)

     //console.log(environment.nome)

     //console.log(environment.id)

     //console.log(environment.email)


      this.router.navigate(['/inicio'])

    },erro =>{
      if(erro.status ==500){
        alert('E-mail ou senha estão incorretos')
      }
    }
    )
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
