import { NavbarService } from './../service/navbar.service';
import { ConsumoService } from 'src/app/service/usuario.service';
import { Categoria } from './../models/Categoria';
import { ProdutosService } from './../service/produtos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from './../models/UserLogin';
import { Produtos } from '../models/Produtos';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  nome = environment.nome;
  userLogin: UserLogin;

  categoria: Categoria[];
  ListaProdutos: Produtos[];

  produtoPesquisa: string;

  sumir: number = 0;
  

  constructor(private router: Router ,private produtosService: ProdutosService, private consumoService: ConsumoService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.produtosService.getCategoria().subscribe(resp => this.categoria = resp)
    
    this.navbarService.notifyObservable$.subscribe(res => {
      if(res.refresh == true){
        this.consumoService.getUser(environment.id).subscribe((resp: UserLogin) =>{
          this.userLogin = resp;
        })
        this.trocar();
      }
    })
  }

  trocar() {
    if (environment.token == '') {
      this.sumir = 0
    } else {
      this.sumir = 1
    }

  }
  logout(){
    this.sumir = 0
    this.router.navigate(['/inicio'])
  }
  ngAfterViewInit() {
    // server-side search
    fromEvent(this.input.nativeElement, 'keyup')
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