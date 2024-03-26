import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccueillComponent } from './accueill/accueill.component';
import { HeaderComponent } from './header/header.component';

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
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
