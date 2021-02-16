import { Produtos } from './../models/Produtos';
import { Categoria } from './../models/Categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  listaProdutos: Produtos[] = []
  constructor(private http:HttpClient) { }

  getAllProdutos(){
    return this.http.get<Produtos>('http://localhost:8081/produtos/todos').pipe(tap(console.log))  
  }
  getByIdProdutos(id: number): Observable <Produtos>{
    return this.http.get<Produtos>(`http://localhost:8081/produtos/id/${id}`)
  }
  getByNomeProdutos(nome: string): Observable <Produtos[]>{
    return this.http.get<Produtos[]>(`http://localhost:8081/produtos/nome/${nome}`)
  }
  updateProdutoById(id: number, produtos: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(`http://localhost:8081/produtos/update/${id}`, produtos)
  }
  postProdutos(produtos: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>('http://localhost:8081/produtos', produtos)
  }
  getCategoria() {
    return this.http.get<Categoria>('http://localhost:8081/categorias/todas').pipe(tap(console.log))
  }
  getCategoriaByNome(nome: string): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:8081/categorias/${nome}`)
  }
  getCategoriaById(id : number): Observable<Categoria> {
    return this.http.get<Categoria>(`http://localhost:8081/categorias/id/${id}`)
  }
}