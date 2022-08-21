export interface UtilisateurModelServer {
  Id: Number;
  Nom: String;
  Prenom : String;
  Email: String;
  Login: String;
  Password: String;
  Etat: Number;
  Statut: Number;
  IdRole: String;
  Telephone: String;
}




export interface AddUser {
  nom: String;
  prenom: String;
  email: String;
  telephone : String;
  login: String;
  idRole: String;
}


export interface UpdateUser {
  nom: String;
  prenom: String;
  email: String;
  telephone : String;
  login: String;
  idRole: number;
  password:string;
  etat:boolean;
  statut:boolean;
  confirmPassword:string;
}


export interface serverResponse  {
  count: number;
  users: UtilisateurModelServer[];
};


export class UserModel {
  email: string;
  password: string;
}

export class UserRegistrer {
  email: string;
  password: string;
  name: string;
}



