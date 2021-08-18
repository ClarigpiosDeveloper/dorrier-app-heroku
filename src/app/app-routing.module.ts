import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LobbyComponent } from './lobby/lobby.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LobbyComponent },
  { path: 'slide1', component: Slide1Component },
  { path: 'slide2', component: Slide2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
