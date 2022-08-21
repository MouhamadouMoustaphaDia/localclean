import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
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
    { path: '', redirectTo: 'evenement', pathMatch: 'evenement' },
    { path: '**', redirectTo: 'evenement' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
