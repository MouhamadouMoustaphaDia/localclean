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
  hiEditeur : boolean;
  hiResponsable : boolean;

  ngOnInit(): void {
  console.log(localStorage.getItem("idRole")) ;
    if (parseInt(localStorage.getItem("idRole"))==2) {
        this.hiEditeur =true;
    }

    console.log(localStorage.getItem("idRole")) ;
    if (parseInt(localStorage.getItem("idRole"))==3) {
        this.hiResponsable =true;
    }

    this.MENU_ITEMS=[ {
      title: 'Accueil',
      icon: 'home-outline',
      link: '/pages/iot-dashboard',
      home: true,
      hidden : this.hiEditeur
    },
    {
      title: 'Fonctionnalités',
      group: true,
    },
      {
        title: 'Evenement',
        icon: 'calendar-outline',
        link: '/pages/evenement'
      },
      {
        title: 'Signalez une zone',
        icon: 'bulb-outline',
        link: '/pages/zone'
      },
      {
        title: 'Modérer un événement',
        icon: 'brush-outline',
        link: '/pages/moderer'
      },
      {
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
