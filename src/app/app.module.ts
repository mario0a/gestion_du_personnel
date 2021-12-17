import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewpersonneComponent } from './personne/newpersonne/newpersonne.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

     NewpersonneComponent,
      PersonnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
