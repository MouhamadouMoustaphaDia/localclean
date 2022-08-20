import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {ListcontactComponent} from "./contact/listcontact/listcontact.component";
import {EvenementComponent} from "./evenement/evenement.component";
import {SignalezoneComponent} from "./signalezone/signalezone.component";
import {ModererEvenementComponent} from "./moderer-evenement/moderer-evenement.component";
import {NotificationComponent} from "./notification/notification.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'evenement',
      component: EvenementComponent,
    },
    {
      path: 'zone',
      component: SignalezoneComponent,
    },
    {
      path: 'moderer',
      component: ModererEvenementComponent,
    },
    {
      path: 'notification',
      component: NotificationComponent,
    },
    {
      path: 'utilisateur',
      loadChildren: () => import('./utilisateur/utlisateur.module')
        .then(m => m.UtilisateurModule),
    },
    {
      path: 'client',
      loadChildren: () => import('./contact/contact.module')
        .then(m => m.ContactModule),
    },
    {
      path: 'compte',
      loadChildren: () => import('./parametrecompte/parametrecompte.module')
        .then(m => m.ParametrcompteModule),
    },
    { path: '', redirectTo: 'utilisateur', pathMatch: 'full' },
    { path: '**', redirectTo: 'utilisateur' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
