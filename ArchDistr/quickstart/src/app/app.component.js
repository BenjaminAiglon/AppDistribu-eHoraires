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
var webservice_1 = require("./webservice");
var AppComponent = (function () {
    function AppComponent(webservice) {
        this.webservice = webservice;
        this.title = 'Schedule ECAM';
        this.name = 'Ecamien';
    }
    AppComponent.prototype.search = function (value) {
        var _this = this;
        console.log("Recherche");
        //console.log(value);
        /**récupérer étudiant grâce au matricule*/
        var url_students = 'http://172.17.10.45:3000/students?matricule=' + value;
        this.webservice.get(url_students).subscribe((function (res) {
            console.log(res);
            //si resultat ok
            console.log("Etudiants récupérés");
            for (var info1 in res) {
                _this.name = res[info1].first_name;
                _this.ue = res[info1].current_ues;
            }
            console.log(_this.ue);
            /**récupérer ue grâce à son id*/
            var url_ue = 'http://172.17.10.34:3000/api/ue/' + _this.ue[0];
            //var test = 'http://172.17.10.43:3000/api/users/';
            _this.webservice.get(url_ue).subscribe((function (result) {
                console.log(result);
                //si resultat ok
                console.log("ue récupérées");
                for (var info2 in res.data) {
                    _this.ue_nom = res.data[info2].name;
                }
            }), (function (err) {
                console.log("UE - Quelque chose ne va pas...");
            }));
            /**récupérer horaire et local grâce à son id_ue*/
            var url_horaires = 'http://localhost:3000/api/hello/' + _this.ue[0];
            _this.webservice.get(url_horaires).subscribe((function (answer) {
                console.log(answer);
                //si resultat ok
                console.log("horaires récupérées");
                for (var info3 in res) {
                    _this.name = res[info3].first_name;
                    _this.ue = res[info3].current_ues;
                }
            }), (function (err) {
                console.log("Horaires - Quelque chose ne va pas...");
            }));
        }), (function (err) {
            console.log("Etudiants - Quelque chose ne va pas...");
        }));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>Bienvenue {{name}}</h2>\n    <div>\n      <label>Matricule</label>\n      <input #box placeholder=\"Matricule\">\n      <button (click)='search(box.value)'>Search</button>\n    </div>\n    <div>\n      Voici votre horaire:\n      {{ue_nom}}\n      {{week}}\n      {{local}}\n    </div>\n    ",
    }),
    __metadata("design:paramtypes", [webservice_1.Webservice])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map