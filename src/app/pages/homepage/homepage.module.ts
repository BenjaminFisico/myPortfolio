import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Startups Disponibles',
      urls: [
        { title: 'Dashboard', url: '/home/main' },
        { title: 'Dashboard' }
      ]
    },
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class homepageModule { }