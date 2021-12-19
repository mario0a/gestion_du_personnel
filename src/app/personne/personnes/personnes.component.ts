import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/personne.model";
import {PersonneService} from "../../services/personne.service";


@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  personnes : Personne[]; //un tableau de Personne

  constructor(private personneService: PersonneService) {
    this.personnes =  personneService.listePersonnes();

  }

  ngOnInit(): void {
  }
  supprimerPersonne(p: Personne)
  {
    let confirmation=confirm("Etes-vous sûr de vouloir supprimer ?")
    this.personneService.supprimerPersonne(p);

  }


}
