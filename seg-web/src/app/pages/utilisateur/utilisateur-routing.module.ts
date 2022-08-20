import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';


import { ListutilisateurComponent } from './listutilisateur/listutilisateur.component';
import { UtilisateurComponent } from './utilisateur.component';


const routes: Routes = [{
  path: '',
  component: UtilisateurComponent,
  children: [
    {
      path: 'list',
      component: ListutilisateurComponent,
    },
    {
      path: 'add',
      component: AddutilisateurComponent,
    },/*
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilisateurRoutingModule {
}

export const routedComponents = [
  ListutilisateurComponent,
  UtilisateurComponent
];