"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
/*
  Generated class for the Webservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Webservice = (function () {
    function Webservice(http) {
        this.http = http;
        console.log('Hello Webservice Provider');
    }
    //requête GET
    Webservice.prototype.get = function (url) {
        //pour récupérer les données de plusieurs pages.
        //loads headers
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .get(url)
            .map(function (res) { return res.json(); }); //résultat renvoyé vers la page d’où on appelle cette fonction, ici sous format json, auquel il faut subscribe
    };
    return Webservice;
}());
Webservice = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Webservice);
exports.Webservice = Webservice;
//# sourceMappingURL=webservice.js.map