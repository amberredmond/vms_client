import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManageOptionComponent } from './manage-option/manage-option.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VolMenuComponent } from './vol-menu/vol-menu.component';
import { OppMenuComponent } from './opp-menu/opp-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageOptionComponent,
    NotFoundComponent,
    VolMenuComponent,
    OppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
