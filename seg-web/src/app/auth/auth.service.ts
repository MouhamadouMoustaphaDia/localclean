import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {UserModel, UserRegistrer} from "../modele/utilisateurs.model";


@Injectable()
export class AuthService {

  isLoggedIn = false;
  role: number;

  private url = "http://seg.alwaysdata.net";

  // store the URL so we can redirect after logging in
  redirectUrl: string;  constructor(private myRoute: Router , private http: HttpClient, public router: Router) { }

  login(value: UserModel) {
    return this.http.post(this.url + '/api/login?email='+value.email+'&password='+value.password,{ observe : 'response'});
    }
  //http://seg.alwaysdata.net/api/addUser?name=Moustapha&email=moustapha@gmail.com&password=passer&nbr_signalement=0&profil_id=2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zZWcuYWx3YXlzZGF0YS5uZXRcL2FwaVwvbG9naW4iLCJpYXQiOjE2NjExMDM3NzcsImV4cCI6MTY2MTEwNzM3NywibmJmIjoxNjYxMTAzNzc3LCJqdGkiOiJ2U3paUHdyRXdpTTJYeWNjIiwic3ViIjo0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Z7mFyFcKY7AXV8vOEC94ekbvCIL_yLd9D9ZfBgFe0a0
  register(value: UserRegistrer) {
    return this.http.post(this.url + '/api/addUser?name='+value.name+'&email='+value.email+'&password='+value.password+'&nbr_signalement=0&profil_id=2&token='+localStorage.getItem("token"),{ observe : 'response'});
  }

  getEvenement(){
    return this.http.get(this.url + '/api/getEvenement?token='+localStorage.getItem("token"))
  }





    logout(): void {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('profil');
      localStorage.removeItem('id');
      location.reload();
    }
    saveToken(token: string, id :number,idRole: number,
            nom: string, prenom: string,email: string, telephone: string,login: string, etat: number,statut: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', String(id));
    localStorage.setItem("idRole",String(idRole));
    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('email', email);
    localStorage.setItem('telephone', telephone);
    localStorage.setItem('login', login);
    localStorage.setItem('etat', String(etat));
    localStorage.setItem('statut', String(statut));



    this.isLoggedIn = true;
  }


  isAdmin() {
    return this.role === 1;

  }
  isEditeur() {
    return this.role == 2;
  }

  isAuthentificate() {
    return this.isLoggedIn;
  }




  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedInn() {
    return this.getToken() !== null;
  }
}
