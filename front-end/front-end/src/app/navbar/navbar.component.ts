import { Categoria } from './../models/Categoria';
import { ProdutosService } from './../service/produtos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from './../models/UserLogin';
import { Produtos } from '../models/Produtos';
import {fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  nome = environment.nome;
  UserLogin: UserLogin;

  categoria: Categoria[];
  ListaProdutos: Produtos[];
 
  produtoPesquisa: string;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getCategoria().subscribe(resp => this.categoria = resp)
  }

  ngAfterViewInit() {
    // server-side search
fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.input.nativeElement.value)
        })
    )
    .subscribe();
}
}