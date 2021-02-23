import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/Usuarios';
import { AlertService } from 'src/app/service/alert.service';
import { ConsumoService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-dados',
  templateUrl: './edit-dados.component.html',
  styleUrls: ['./edit-dados.component.css']
})
export class EditDadosComponent implements OnInit {

  usuarios: Usuarios = new Usuarios()
  idUsuario: number
  confirmarSenha: string

  constructor(
    private consumoService: ConsumoService,
    private route: ActivatedRoute,
    private router: Router,
    private alerta: AlertService
  ) { }

  ngOnInit(){
    this.idUsuario = this.route.snapshot.params['id']

    this.findByIdUser(this.idUsuario)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  atualizar(){
    if (this.usuarios.senha != this.confirmarSenha) {
      this.alerta.showAlertVerde('A senhas estão divergentes.')
    }
    else {
      this.consumoService.cadastrar(this.usuarios).subscribe((resp: Usuarios) => {
        this.usuarios = resp
        this.alerta.showAlertVerde('cadastro atualizado com sucesso, faça o login novamente')
        environment.token = ''
        environment.nome = ''
        environment.email = ''
        environment.id = 0
        this.router.navigate(['/login-cadastro'])
      })

    }

  }

  findByIdUser(id: number){
    this.consumoService.getByIdUser(id).subscribe((resp: Usuarios) => {
      this.usuarios = resp
    })
  }

}
