import { Observable } from 'rxjs';
import { Pedidos } from './../models/Pedidos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(
    private http: HttpClient
  ) {}

  getPedidos(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>('http://localhost:8081/pedido/all')
  }
  postPedido(pedido: Pedidos): Observable<Pedidos> {
    return this.http.post<Pedidos>('http://localhost:8081/pedido/add', pedido)
  }
  getPedidoById(id: number):Observable<Pedidos> {
    return this.http.get<Pedidos>(`http://localhost:8081/pedido/id/${id}`)
  }
}
