import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {ChangeDetectorRef, Component, Inject, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import {UserModel} from '../../modele/utilisateurs.model';
import {AuthService} from '../auth.service';
import {getDeepFromObject, NB_AUTH_OPTIONS, NbAuthResult, NbAuthService, NbAuthSocialLink} from "@nebular/auth";
import {UtilisateursService} from "../../services/utilisateurs.service";
import {NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router, public authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authService.logout();
        }
      }
    });
  }
}

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user: UserModel = {
    email: '',
    password: '',
  }

  rememberMe = false;
  positions = NbGlobalPhysicalPosition;
  constructor(protected service: AuthService, protected router: Router,private toastrService: NbToastrService) {

  }


  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    this.service.login(this.user).subscribe(resp => {
        this.saveToken(resp['token'],resp['user'].name,resp['user'].profil_id,resp['user'].id)
      console.log(resp);
      this.router.navigate(['pages/iot-dashboard']);
      }, (err) => {
        console.log(err);
        this.toastrService.show('login ou mot de passe incorect','Connexion',{ position:this.positions.TOP_RIGHT,status:'danger'})

      }
    );
  }

  saveToken(jwt: string,
            name: string,
            profilId: number,
            iduser: number
            ) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('name', name);
    localStorage.setItem('id', String(iduser));
    localStorage.setItem('profil', String(profilId));
  }

}
