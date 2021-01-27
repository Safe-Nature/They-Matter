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
var LoginCadastroComponent = /** @class */ (function () {
    function LoginCadastroComponent(consumoService, router) {
        this.consumoService = consumoService;
        this.router = router;
        this.usuario = new Usuario_1.Usuario;
        this.userEndPoint = 'http://localhost:8081/usuario';
    }
    LoginCadastroComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    LoginCadastroComponent.prototype.login = function () {
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
