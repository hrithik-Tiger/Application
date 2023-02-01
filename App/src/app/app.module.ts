import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import {AngularFireModule } from '@angular/fire/compat'
import { enviroment } from 'src/enviroments/enviroments';
import { LoginComponent } from './LoginComponent/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
