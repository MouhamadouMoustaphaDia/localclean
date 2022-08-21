import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink} from "@nebular/auth";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {UserRegistrer} from "../../modele/utilisateurs.model";

@Component({
  selector: 'ngx-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


  user: UserRegistrer = {
    email: '',
    password: '',
    name: ''
  };

  constructor(protected service: AuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected router: Router) {


  }

  register(): void {
    console.log(this.user)

    this.service.register(this.user).subscribe(resp=> {
     console.log(resp)
      this.saveToken(resp['token'],resp['user'].name,resp['user'].profil_id,resp['user'].id)
      console.log(resp);
      this.router.navigate(['pages/iot-dashboard']);
    }, (errors) => {
      console.log(errors)
    })

  }

  saveToken(jwt: string,
            nom: string,
            profilId: number,
            iduser: number
  ) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('name', nom);
    localStorage.setItem('id', String(iduser));
    localStorage.setItem('profil', String(profilId));
  }



  ngOnInit(): void {
  }
}
