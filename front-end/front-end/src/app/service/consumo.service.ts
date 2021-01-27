import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/UserLogin';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  public userEndPoint = 'http://localhost:8081/usuarios'

  constructor(

    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(this.userEndPoint + '/logar', userLogin)

  }
  cadastro(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.userEndPoint + '/cadastrar', usuario)
  }
}
