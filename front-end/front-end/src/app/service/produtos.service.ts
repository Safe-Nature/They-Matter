import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/Produtos';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient) { }

  getAllProdutos(){
    return this.http.get<Produtos>('http://localhost:8081/produtos/todos').pipe(tap(console.log))  
  }

  getByIdProdutos(id: number): Observable <Produtos>{
    return this.http.get<Produtos>(`http://localhost:8081/produtos/id/${id}`)
  }

  postProdutos(produtos: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>('http://localhost:8081/produtos', produtos)
  }
}

