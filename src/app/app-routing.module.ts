import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccueillComponent } from './accueill/accueill.component';
import { HeaderComponent } from './header/header.component';
import { ListePatientComponent } from './patient/liste-patient/liste-patient.component';
import { AjouterPatientComponent } from './patient/ajouter-patient/ajouter-patient.component';
import { ListeRvComponent } from './rendez_vous/liste-rv/liste-rv.component';
import { AjouterRvComponent } from './rendez_vous/ajouter-rv/ajouter-rv.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'side-nav',
    component: SideNavComponent,
  },
  {
    path: 'accueill',
    component: AccueillComponent,
    children: [
      {
        path: 'side-nav',
        component: SideNavComponent,
      },
      {
        path: 'header',
        component: HeaderComponent,
      },
    ],
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'liste-patient',
    component: ListePatientComponent,
  },
  {
    path: 'ajouter-patient',
    component: AjouterPatientComponent,
  },
  {
    path: 'liste-rv',
    component: ListeRvComponent,
  },
  {
    path: 'ajouter-rv',
    component: AjouterRvComponent,
  },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
