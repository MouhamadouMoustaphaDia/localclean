import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
  NbUserModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ContactRoutingModule, routedComponents} from './contact-routing.module';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AddcontactComponent } from './addcontact/addcontact.component';


@NgModule({
  imports: [
    NbStepperModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbStepperModule,
    ngFormsModule
  ],
  declarations: [
    ...routedComponents,
    AddcontactComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class ContactModule { }
