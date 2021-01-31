import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from './../models/UserLogin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nome=environment.nome
  UserLogin: UserLogin;

  constructor() { }

  ngOnInit() {

  }

  


}
