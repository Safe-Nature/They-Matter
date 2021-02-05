import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../models/UserLogin';
import { Usuarios } from '../models/Usuarios';

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
  cadastrar(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>("http://localhost:8081/usuario/cadastrar", usuario)
  }
  getUser(id: number){
    return this.http.get<UserLogin>(`http://localhost:8081/usuario/id/${id}`)
  }
  //getById(id: number){
   // return this.http.get<Usuario>(`http://localhost:8081/usuario/id/${id}`)
 // }

  logado(){
    let ok : boolean = false

    if(environment.token !=''){
      ok=true
    }
    console.log(environment.nome)
    return ok
  }
}
