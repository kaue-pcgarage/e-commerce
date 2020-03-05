import localePy from '@angular/common/locales/es-PY'
import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { NgModule, LOCALE_ID } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IndexComponent } from './nav/mobile/index/nav-mobile-index.component';
import { FooterComponent } from './main/footer/footer.component';



registerLocaleData(localePy);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PY' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
