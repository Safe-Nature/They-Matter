import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../models/UserLogin';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {


  constructor(

    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("http://localhost:8081/usuario/logar", userLogin)

  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("http://localhost:8081/usuario/cadastrar", usuario)
  }

  logado(){
    let ok : boolean = false

    if(environment.token !=''){
      ok=true
    }

    return ok
  }
}
