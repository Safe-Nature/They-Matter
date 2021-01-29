import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MainPageComponent } from './main-page/main-page.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginCadastroComponent,
    CarrinhoComponent,
    ProdutosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
