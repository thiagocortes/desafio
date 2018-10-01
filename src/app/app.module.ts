import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { DesafioComponent } from './desafio/desafio.component';
import { DesafioService } from './service/desafio.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    DesafioComponent,
    AlertComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DesafioService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
