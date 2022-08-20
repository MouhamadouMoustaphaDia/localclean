import { NgModule } from '@angular/core';
import {NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EvenementComponent } from './evenement/evenement.component';
import { SignalezoneComponent } from './signalezone/signalezone.component';
import { ModererEvenementComponent } from './moderer-evenement/moderer-evenement.component';
import { NotificationComponent } from './notification/notification.component';




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbAlertModule,
  ],
  declarations: [
    PagesComponent,
    EvenementComponent,
    SignalezoneComponent,
    ModererEvenementComponent,
    NotificationComponent,
  ],
})
export class PagesModule {
}
