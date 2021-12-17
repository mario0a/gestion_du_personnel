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

  constructor( private produitService: PersonneService ) { }


  ngOnInit(): void {
  }
  addPersonne(){
    this.produitService.ajouterPersonne(this.newPersonne);

  }

}
