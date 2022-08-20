import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AddContact } from '../modele/contacts.model';
import { AddUser, serverResponse, UtilisateurModelServer, UserModel, UpdateUser } from '../modele/utilisateurs.model';



@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private url = environment.serverURL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private http: HttpClient) {
  }

  getAllUtilisateur(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs', {
    });
  }

  getUtilisateurById(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/'+id, {
    });
  }

  
  changerStatutUtilisateur(id): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'utilisateurs/changestatut/'+id, {
    });
  }

  deleteUtilisateur(id): Observable<serverResponse> {
    return this.http.delete<serverResponse>(this.url + 'utilisateurs/delete/'+id, {
    });
  }

  AddUtilisateur(utilisateur : AddUser): Observable<serverResponse> {
    return this.http.post<serverResponse>(this.url + 'utilisateurs/add',utilisateur, {
    });
  }
  getAllRole(): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'roles', {
    });
  }

  
  UpdateUtilisateur(id,utilisateur : UpdateUser){
    return this.http.put(this.url + 'utilisateurs/put/' + id , utilisateur);
  }

}