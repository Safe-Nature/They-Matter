import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../models/UserLogin';
import { ConsumoService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id = environment.id
  userLogin : UserLogin

  constructor(
    private consumoService: ConsumoService,
    
  ) { }

  ngOnInit() { 
    this.consumoService.getUser(environment.id).subscribe(resp => this.userLogin = resp)

   
  }

 

}

