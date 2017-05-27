import { Component } from '@angular/core';
import { Webservice } from './webservice';

@Component({
  selector: 'my-app',
  template:
  `
    <h1>{{title}}</h1>
    <h2>Bienvenue {{name}}</h2>
    <div>
      <label>Matricule</label>
      <input #box placeholder="Matricule">
      <button (click)='search(box.value)'>Search</button>
    </div>
    <div>
      Voici votre horaire:
      UE: {{ue_nom}}
      Semaine: {{week}}
      Local: {{local}}
    </div>
    `,
})
export class AppComponent  { 
    title = 'Schedule ECAM';
    name = 'Ecamien';
    ue: any;
    local: any;
    week: any;
    ue_nom: any;


    constructor(private webservice: Webservice) {}

    search(value: string){
      console.log("Recherche");
      //console.log(value);


      /**récupérer étudiant chez Christophe/Guillaume grâce au matricule*/
      var url_students = 'http://172.17.10.45:3000/students?matricule=' + value;
      this.webservice.get(url_students).subscribe((res => {
        console.log(res);
        //si resultat ok
        console.log("Etudiant récupéré");

        for (var info1 in res){
          this.name = res[info1].first_name;
          this.ue = res[info1].current_ues;
        }

        console.log(this.ue);


        /**récupérer ue chez Gautier grâce à son id*/
        var url_ue = 'http://172.17.10.34:3000/api/ue/' + this.ue[0];
        //var test = 'http://172.17.10.43:3000/api/users/';
        this.webservice.get(url_ue).subscribe((result => {
          console.log(result);
          //si resultat ok
          console.log("ue récupérées");

          for (var info2 in res.data){
            this.ue_nom = res.data[info2].name;
          }

        }),
        (err => { //sinon...
          console.log("UE - Quelque chose ne va pas...");
        }));


        /**récupérer semaine et local dans notre DB grâce à id_ue*/
        var url_horaires = 'http://localhost:3000/api/hello/' +  this.ue[0];
        this.webservice.get(url_horaires).subscribe((answer => {
          console.log(answer);
          //si resultat ok
          console.log("horaires récupérées");

          for (var info3 in res){
            this.local = res[info3].room;
            this.week = res[info3].week;
          }
          
          console.log("Voici l'horaire du matricule que vous avez entré:");
          console.log("UE:" + this.ue_nom);
          console.log("Semaine:" + this.week);
          console.log("Local:" + this.local);
          
        }),
        (err => { //sinon...
          console.log("Horaires - Quelque chose ne va pas...");
        }));
        

      }),
      (err => { //sinon...
        console.log("Etudiants - Quelque chose ne va pas...");
      }));

    }
  }
