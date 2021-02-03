"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_prod_1 = require("src/environments/environment.prod");
var ConsumoService = /** @class */ (function () {
    function ConsumoService(http) {
        this.http = http;
    }
    ConsumoService.prototype.login = function (userLogin) {
        return this.http.post("http://localhost:8081/usuario/logar", userLogin);
    };
    ConsumoService.prototype.cadastrar = function (usuario) {
        return this.http.post("http://localhost:8081/usuario/cadastrar", usuario);
    };
    ConsumoService.prototype.logado = function () {
        var ok = false;
        if (environment_prod_1.environment.token != '') {
            ok = true;
        }
        return ok;
    };
    ConsumoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConsumoService);
    return ConsumoService;
}());
exports.ConsumoService = ConsumoService;

//# sourceMappingURL=consumo.service.js.map
