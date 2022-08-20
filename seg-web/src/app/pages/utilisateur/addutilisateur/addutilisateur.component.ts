import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService,  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig, } from '@nebular/theme';
import { AddUser, UtilisateurModelServer } from '../../../modele/utilisateurs.model';
import { UtilisateursService } from '../../../services/utilisateurs.service';



@Component({
  selector: 'ngx-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.scss']
})
export class AddutilisateurComponent implements OnInit {
titre;
roles: any;

  constructor(private UtilisateursService: UtilisateursService,
              private router:Router,private toastrService: NbToastrService) {
  }

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Ajout d\'un nouveau utilisateur !';
  content = `Utilisateur ajouté avec suucès!`;




  ngOnInit() {
    // Récupérer tous les roles
    this.UtilisateursService.getAllRole().subscribe((data) => {
      this.roles = data;
    }, (err) => {
      console.log(err);
    });

}



// Ajout d'un utilisateur
  user: AddUser = {
    email: '',
    telephone :'',
    idRole: '',
    login:'',
    nom :'',
    prenom :''
  };

  Ajout(form :NgForm){
    this.UtilisateursService.AddUtilisateur(this.user).subscribe((data) => {
    
    //  console.log(data)
      form.reset();
      this.ToastValide(this.status, this.title, this.content);
      this.router.navigateByUrl('pages/utilisateur/list')
    }, (err) => {
      console.log(this.user)
      console.log(err);
    });
  }

  private ToastValide(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
