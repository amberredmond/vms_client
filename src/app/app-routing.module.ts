import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageOptionComponent } from './manage-option/manage-option.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { VolMenuComponent } from './vol-menu/vol-menu.component';
import { OppMenuComponent } from './opp-menu/opp-menu.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'manage-option',
    component: ManageOptionComponent
  },
  {
    path: 'vol-menu',
    component: VolMenuComponent
  },
  {
    path: 'opp-menu',
    component: OppMenuComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
