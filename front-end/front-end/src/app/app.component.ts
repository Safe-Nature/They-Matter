import { Component } from '@angular/core';
import { ConsumoService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
 public ConsumoService: ConsumoService
  ){

  }

}