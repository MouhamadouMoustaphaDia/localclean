import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from "../../services/utilisateurs.service";
import { UtilisateurModelServer, UserModel } from "../../modele/utilisateurs.model";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListutilisateurComponent } from "../utilisateur/listutilisateur/listutilisateur.component";

@Component({
  selector: 'ngx-components',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class UtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateursService,
    private router: Router,
    private modalService: NgbModal){

  }


  ngOnInit() {
  
  }

}
