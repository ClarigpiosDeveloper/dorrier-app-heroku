import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Slide1Component,
    Slide2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
