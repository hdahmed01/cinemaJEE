import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { NotfoundComponent } from './notfound/notfound.component';
import { FilmsComponent } from './films/films.component';
import { SeanceComponent } from './seance/seance.component';
import { SalleComponent } from './salle/salle.component';

import { SalleprogComponent } from './salleprog/salleprog.component';
import { CompteComponent } from './compte/compte.component';
import { ReserverComponent } from './reserver/reserver.component'; 
import { AuthGuardService } from './services/authentification/auth-guard.service' 


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component:AboutComponent , title: "about" },
  { path: 'films', component:FilmsComponent , title: "films", canActivate:[AuthGuardService] },
  { path: 'seances', component:SeanceComponent , title: "seances",canActivate:[AuthGuardService] },
  { path: 'contact', component:ContactComponent , title: "contact" },
  { path: 'salle', component:SalleComponent , title: "salle",canActivate:[AuthGuardService] },
  { path: 'salleprog', component:SalleprogComponent , title: "salleProg",canActivate:[AuthGuardService] },
  { path: 'reserver', component:ReserverComponent , title: "Reserver" },
  { path: 'compte', component:CompteComponent , title: "compte",canActivate:[AuthGuardService] },
  { path: 'notfound', component:NotfoundComponent , title: "404" },
  { path: '**', component: NotfoundComponent, title: "404" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
