import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewpersonneComponent } from './personne/newpersonne/newpersonne.component';
import { PersonnesComponent } from './personne/personnes/personnes.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './personne/update-personne/update-personne.component';


@NgModule({
  declarations: [
    AppComponent,
     NewpersonneComponent,
      PersonnesComponent,
      UpdatePersonneComponent
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
