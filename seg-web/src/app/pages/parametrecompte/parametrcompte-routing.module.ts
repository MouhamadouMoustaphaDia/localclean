import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoscompteComponent } from './infoscompte/infoscompte.component';
import { ModifiercompteComponent } from './modifiercompte/modifiercompte.component';
import { ParametrecompteComponent } from './parametrecompte.component';


const routes: Routes = [{
  path: '',
  component: ParametrecompteComponent,
  children: [
    {
      path: 'infos',
      component: InfoscompteComponent,
    },
    {
      path: 'mod',
      component: ModifiercompteComponent,
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
export class ParametrecompteRoutingModule {
}

export const routedComponents = [
  InfoscompteComponent,
  ParametrecompteComponent
];