import { Injectable } from '@angular/core';
import { Personne  } from "../model/personne.model";


@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes : Personne[]; //un tableau de Personne

  constructor() {
    this.personnes = [
      {idPersonne : 1, nomPersonne : "toto", prenomPersonne : "titi", dateNaissance : new Date("12/17/2010"), postePersonne :"boss",
        dateArrive: new Date("12/17/2010")},
      {idPersonne : 2, nomPersonne : "toto", prenomPersonne : "titi", dateNaissance : new Date("12/17/2010"), postePersonne :"employe",
        dateArrive: new Date("12/17/2010")},
      {idPersonne : 3, nomPersonne : "toto", prenomPersonne : "titi", dateNaissance : new Date("12/17/2010"), postePersonne :"femme de menage",
        dateArrive: new Date("12/17/2010")}

    ];
  }
  listePersonnes(): Personne[] {
    return this.personnes;
  }
  ajouterPersonne( pers: Personne){
    this.personnes.push(pers);
  }
}
