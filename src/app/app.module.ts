import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContentConteinerComponent } from './content-conteiner/content-conteiner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProyectPageComponent } from './pages/proyectPage/proyectPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent,
    HomepageComponent,
    ProyectsComponent,
    WorksComponent,
    ContactComponent,
    ContentConteinerComponent,
    PaginationComponent,
    ProyectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
