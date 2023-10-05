import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProyectPageComponent } from './pages/proyectPage/proyectPage.component';

const routes: Routes = [
  { path:'home', 
    component: HeaderComponent,
    children: [
      {path: '',
      component: HomepageComponent},
      {path: 'proyects',
      component: ProyectsComponent},
      {path: 'proyect/:id',
      component: ProyectPageComponent},
      {path: 'works',
      component: WorksComponent},
      {path: 'contact',
      component: ContactComponent},
    ],
  },
  { path: '**',
    redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
