export class Contacts {
  Id: number;
  Nom: string;
  Prenom:string;
  Etat: boolean;
  Statut: boolean;
  Pays: string;
  DateDeNaissance: Date;
  Sexe: string;
  Adresse:string
  Situation: string;
  Profession: string; 
  IdNiveauVisibilite: number;
  IdUser : string;
}


export class ContactsUpdate {
  
  DateDeNaissance: string;

}

export interface Countries {
  code: string
  code3: string
  name: string
  number: string
}

export interface contactCanalInfo{
  facebook : string;
  whatsapp : string;
  telephone : string;
  mail:string;
}