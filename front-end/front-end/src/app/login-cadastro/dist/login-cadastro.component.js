"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Usuario_1 = require("./../models/Usuario");
var core_1 = require("@angular/core");
var UserLogin_1 = require("../models/UserLogin");
var environment_prod_1 = require("src/environments/environment.prod");
var LoginCadastroComponent = /** @class */ (function () {
    function LoginCadastroComponent(consumoService, router) {
        this.consumoService = consumoService;
        this.router = router;
        this.usuario = new Usuario_1.Usuario;
        this.userLogin = new UserLogin_1.UserLogin();
        this.nome = window.document.getElementById('nome');
    }
    LoginCadastroComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    LoginCadastroComponent.prototype.login = function () {
        var _this = this;
        this.consumoService.login(this.userLogin).subscribe(function (resp) {
            _this.userLogin = resp;
            environment_prod_1.environment.token = _this.userLogin.token;
            environment_prod_1.environment.nome = _this.userLogin.nome;
            environment_prod_1.environment.id = _this.userLogin.id;
            environment_prod_1.environment.email = _this.userLogin.email;
            console.log(environment_prod_1.environment.token);
            console.log(environment_prod_1.environment.nome);
            console.log(environment_prod_1.environment.id);
            console.log(environment_prod_1.environment.email);
            if (environment_prod_1.environment.token == null) {
                alert('Usuario inválido');
            }
            else {
                _this.router.navigate(['/profile']);
            }
        }, function (erro) {
            if (erro.status == 500) {
                alert('E-mail ou senha estão incorretos');
            }
        });
    };
    LoginCadastroComponent.prototype.cadastrar = function () {
        var _this = this;
        this.usuario = this.usuario;
        if (this.usuario.senha != this.confirmarSenha) {
            alert('A senhas estão divergentes.');
        }
        else {
            this.consumoService.cadastrar(this.usuario).subscribe(function (resp) {
                _this.usuario = resp;
                _this.router.navigate(['/inicio']);
                alert('Seu cadastro foi efetudado com sucesso!');
            });
        }
    };
    LoginCadastroComponent.prototype.confirmSenha = function (event) {
        this.confirmarSenha = event.target.value;
    };
    LoginCadastroComponent.prototype.LiberaDados = function (event) {
        this.Dadosliberados = event.target.value;
    };
    LoginCadastroComponent.prototype.confirmEmail = function (event) {
        this.confirmEmail = event.target.value;
    };
    __decorate([
        core_1.ViewChild("invalid-user")
    ], LoginCadastroComponent.prototype, "element");
    LoginCadastroComponent = __decorate([
        core_1.Component({
            selector: 'app-login-cadastro',
            templateUrl: './login-cadastro.component.html',
            styleUrls: ['./login-cadastro.component.css']
        })
    ], LoginCadastroComponent);
    return LoginCadastroComponent;
}());
exports.LoginCadastroComponent = LoginCadastroComponent;

//# sourceMappingURL=login-cadastro.component.js.map
