"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var carrinho_component_1 = require("./carrinho/carrinho.component");
var login_cadastro_component_1 = require("./login-cadastro/login-cadastro.component");
var main_page_component_1 = require("./main-page/main-page.component");
var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: "inicio", component: main_page_component_1.MainPageComponent },
    { path: "login-cadastro", component: login_cadastro_component_1.LoginCadastroComponent },
    { path: "carrinho", component: carrinho_component_1.CarrinhoComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
