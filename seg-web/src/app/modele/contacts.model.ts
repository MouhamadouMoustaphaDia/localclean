export interface ContactModelServer {
    Id: Number;
    NomComplet: String;
    Matricule: String;
    Adresse: String;
    Etat: Number;
    Statut: Number;
    Pays: String;
    Region: String;
    DateDeNaissance: String;
    Sexe: String;
    Situation: String;
    Profession: String;
    IdNiveauVisibilite: Number;
  }

  export interface AddContact {
    nomComplet: String;
    DateDeNaissance: String;
    Adresse: String;
    Profession: String;
    Pays: String;
    Region: String;
    Sexe: String;
    Situation: String;
  }

  
export interface serverResponse  {
    count: number;
    contacts: ContactModelServer[]
  };