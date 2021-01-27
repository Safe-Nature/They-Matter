import { Usuario } from './../models/Usuario';
import { UserLogin } from './../models/UserLogin';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  public userEndPoint = 'http://localhost:8081/usuarios'

  constructor(

    private http: HttpClient

  ) { }

  ngOnInit(): void {
  }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(this.userEndPoint + '/logar', userLogin)

  }
  cadastro(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.userEndPoint + '/cadastrar', usuario)
  }
}
