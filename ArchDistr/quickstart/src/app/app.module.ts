import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { Webservice } from './webservice';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ Webservice ]
})
export class AppModule { }
