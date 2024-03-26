import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccueillComponent } from './accueill/accueill.component';
import { HeaderComponent } from './header/header.component';
import { ListePatientComponent } from './patient/liste-patient/liste-patient.component';
import { AjouterPatientComponent } from './patient/ajouter-patient/ajouter-patient.component';
import { ListeRvComponent } from './rendez_vous/liste-rv/liste-rv.component';
import { AjouterRvComponent } from './rendez_vous/ajouter-rv/ajouter-rv.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, MainComponent, SideNavComponent, AccueillComponent, HeaderComponent, ListePatientComponent, AjouterPatientComponent, ListeRvComponent, AjouterRvComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
