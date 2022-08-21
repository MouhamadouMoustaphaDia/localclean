import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
  <ngx-one-column-layout>
  <nb-menu [items]="MENU_ITEMS"></nb-menu>
  <router-outlet></router-outlet>
</ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  MENU_ITEMS: NbMenuItem[]=[];
  adherant : boolean;
  admin : boolean;

  ngOnInit(): void {
    this.adherant =false
    this.admin =false
  console.log(localStorage.getItem("profil")) ;
    if (localStorage.getItem("profil")==2) {
        this.adherant =true;

    }
    if (localStorage.getItem("profil")==1) {
        this.admin =true;
    }

    console.log(this.admin);
    console.log(this.adherant)
    console.log(localStorage.getItem("profil")) ;
    this.MENU_ITEMS=[ {
      title: 'Accueil',
      icon: 'home-outline',
      link: '/pages/iot-dashboard',
      home: true,
    },
    {
      title: 'Fonctionnalités',
      group: true,
    },
      {

        title: 'Mes Evenement',
        icon: 'calendar-outline',
        link: '/pages/evenement'
      },
      {
        hidden: this.adherant ? false : true,
        title: 'Signalez une zone',
        icon: 'bulb-outline',
        link: '/pages/zone'
      },
      {
        hidden: this.admin ? false : true,
        title: 'Modérer un événement',
        icon: 'brush-outline',
        link: '/pages/moderer'
      },
      {
        hidden: this.admin ? false : true,
        title: 'Notifications',
        icon: 'bell-outline',
        link: '/pages/notification'
      },
    {
      //hidden : this.hiEditeur || this.hiResponsable,
      title: 'Compte',
      icon: 'person-outline',
      children: [
        {
          title: 'Se Connecter',
          link: '/auth/login',
        },
        {
          title: 'S\'inscrire',
          link: '/auth/inscription',
        },
      ],
    },
    // {
    //   title: 'Client',
    //   icon: 'people-outline',
    //   link: '/pages/ui-features',
    //   children: [
    //     {
    //       title: 'Ajouter un client',
    //       link: '/pages/client/add',
    //     },
    //     {
    //       title: 'List des clients',
    //       link: '/pages/client/list',
    //     },
    //   ],
    // },
  ]
  }

}
