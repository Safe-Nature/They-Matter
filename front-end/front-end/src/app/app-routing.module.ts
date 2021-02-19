import { DoacaoComponent } from './doacao/doacao.component';
import { ProdutoPageComponent } from './produto-page/produto-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasPageComponent } from './categorias-page/categorias-page.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditDadosComponent } from './profile/edit-dados/edit-dados.component';
import { DeleteDadosComponent } from './profile/delete-dados/delete-dados.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ParceirasComponent } from './parceiras/parceiras.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:"inicio", component: MainPageComponent},
  {path:"login-cadastro", component: LoginCadastroComponent},
  {path:"carrinho", component: CarrinhoComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'edit-dados/:id', component: EditDadosComponent},
  {path: 'delete-dados/:id', component: DeleteDadosComponent},
  {path: 'pesquisa/:busca', component: PesquisaComponent},
  {path: 'produto/:id', component: ProdutoPageComponent},
  {path: 'parceiras', component: ParceirasComponent},
  {path: 'doacao', component: DoacaoComponent}

];
const volitileRoutes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: 'categoria/:id', component: CategoriasPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(volitileRoutes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
