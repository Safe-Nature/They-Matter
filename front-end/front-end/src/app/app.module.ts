import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MainPageComponent } from './main-page/main-page.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriasPageComponent } from './categorias-page/categorias-page.component';
import { EditDadosComponent } from './profile/edit-dados/edit-dados.component';
import { DeleteDadosComponent } from './profile/delete-dados/delete-dados.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ProdutoPageComponent } from './produto-page/produto-page.component';
import { ParceirasComponent } from './parceiras/parceiras.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { AlertComponent } from './alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginCadastroComponent,
    CarrinhoComponent,
    ProdutosComponent,
    SobreComponent,
    ProfileComponent,
    CategoriasPageComponent,
    PesquisaComponent,
    EditDadosComponent,
    DeleteDadosComponent,
    ProdutoPageComponent,
    ParceirasComponent,
    ParceirasComponent,
    DoacaoComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
