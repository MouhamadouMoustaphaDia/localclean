import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';

import { ContactComponent } from './contact.component';
import { ListcontactComponent } from './listcontact/listcontact.component';


const routes: Routes = [{
  path: '',
  component: ContactComponent,
  children: [
    {
      path: 'list',
      component: ListcontactComponent,
    },
    {
      path: 'add',
      component: AddcontactComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {
}

export const routedComponents = [
  ListcontactComponent,
  ContactComponent
];