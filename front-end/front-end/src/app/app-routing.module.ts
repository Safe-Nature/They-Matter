import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { CarrinhoComponent } from './carrinho/carrinho.component';*/
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:"inicio", component: MainPageComponent},
  {path:"login-cadastro", component: LoginCadastroComponent},
  /*{path:"carrinho", component: CarrinhoComponent},*/
  {path: 'profile', component: ProfileComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
