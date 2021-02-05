import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ConsumoService } from 'src/app/service/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-dados',
  templateUrl: './edit-dados.component.html',
  styleUrls: ['./edit-dados.component.css']
})
export class EditDadosComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string

  constructor(
    private consumoService: ConsumoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.idUsuario = this.route.snapshot.params['id']

    this.findByIdUser(this.idUsuario)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  atualizar(){
    if (this.usuario.senha != this.confirmarSenha) {
      alert('A senhas estão divergentes.')
    }
    else {
      this.consumoService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert('cadastro atualizado com sucesso, faça o login novamente')
        environment.token = ''
        environment.nome = ''
        environment.email = ''
        environment.id = 0
        this.router.navigate(['/login-cadastro'])
      })

    }

  }

  findByIdUser(id: number){
    this.consumoService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
