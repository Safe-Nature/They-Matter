import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ConsumoService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-dados',
  templateUrl: './delete-dados.component.html',
  styleUrls: ['./delete-dados.component.css']
})
export class DeleteDadosComponent implements OnInit {

  usuario: Usuario = new Usuario()
  

  constructor(
    private consumoService: ConsumoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }
  
  apagar() {
    this.consumoService.deleteUsuario(environment.id).subscribe(() => {
      
      environment.token = ''
      environment.nome = ''
      environment.email = ''
      environment.id = 0
      

    } );
      alert('Perfil apagado com sucesso!')
      this.router.navigate(['/inicio'])

  
    
  }
}
