import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-modifiercompte',
  templateUrl: './modifiercompte.component.html',
  styleUrls: ['./modifiercompte.component.scss']
})
export class ModifiercompteComponent implements OnInit {
  invalidLogin: Boolean;
  constructor(private authService: AuthService,) { }

  ngOnInit(): void {
    this.authService.isLoggedIn = false;
  }


  login(form: NgForm) {

   
  }
}
