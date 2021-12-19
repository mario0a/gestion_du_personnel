import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/personne.model";
import { PersonneService} from "../../services/personne.service";

@Component({
  selector: 'app-newpersonne',
  templateUrl: './newpersonne.component.html',
  styleUrls: ['./newpersonne.component.css']
})
export class NewpersonneComponent implements OnInit {
  newPersonne = new Personne();
  message!: string;

  constructor( private personneService: PersonneService ) { }


  ngOnInit(): void {
  }
  addPersonne(){
    this.personneService.ajouterPersonne(this.newPersonne);
    this.message= this.newPersonne.nomPersonne+" ca été ajouté avec succés !"

  }

}
