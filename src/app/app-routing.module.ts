import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewpersonneComponent } from './personne/newpersonne/newpersonne.component'
import {PersonnesComponent} from "./personne/personnes/personnes.component";
import {UpdatePersonneComponent} from "./personne/update-personne/update-personne.component";

const routes:Routes =[
  {path:"personnes",component : PersonnesComponent},
  {path:"newpersonne",component : NewpersonneComponent},
  {path: "", redirectTo: "personnes", pathMatch: "full" }, //ajoute un comportement par defaut pour le localhost
  {path: "updatePersonne/:id", component: UpdatePersonneComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
