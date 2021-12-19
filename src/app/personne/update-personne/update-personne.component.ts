import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonneService} from "../../services/personne.service";
import {Personne} from "../../model/personne.model";


@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {
  currentPersonne = new Personne();

  constructor(private activateRoute: ActivatedRoute,private router :Router,private personneService: PersonneService) {

  }

  ngOnInit(): void {
    this.currentPersonne = this.personneService.consulterPersonne(this.activateRoute.snapshot.params.id);
  }
  updatePersonne()
  {
    this.personneService.updatePersonne(this.currentPersonne);
    this.router.navigate(['personnes']) // permet le retour vers la page liste des personnes
  }




}
