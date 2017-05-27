import { Component } from '@angular/core';

//import { Webservice } from '../../providers/webservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'Schedule ECAM';
  name = 'Ecamien';

  constructor(
    //private webservice: Webservice
    ) {

  }

  /*call() {
    var url = 'localhost:3000/api/hello/lancelot';

    this.webservice.get(url).subscribe((res => {
      console.log(res);

      //si resultat ok
      console.log("get est ok");
    }),
    (err => { //sinon...
      console.log("Quelque chose ne va pas...");
    }));
  }*/

}
