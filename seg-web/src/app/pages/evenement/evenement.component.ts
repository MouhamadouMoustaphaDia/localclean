import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {EvenementModel} from "../../modele/utilisateurs.model";

@Component({
  selector: 'ngx-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {

  constructor(private service:AuthService) { }
    evenement:any;


  ngOnInit(): void {
    this.service.getEvenement().subscribe(data => {
      this.evenement=  data;
    })

  }

}
