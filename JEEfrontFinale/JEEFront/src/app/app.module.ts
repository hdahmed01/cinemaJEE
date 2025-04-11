import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';

import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CardModule } from 'primeng/card';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilmsComponent } from './films/films.component';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SeanceComponent } from './seance/seance.component';
import { SalleComponent } from './salle/salle.component';

import { SalleprogComponent } from './salleprog/salleprog.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
//import { SelectModule } from 'primeng/select';

import { CompteComponent } from './compte/compte.component';
import { CalendarModule } from 'primeng/calendar';
import { ReserverComponent } from './reserver/reserver.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    FilmsComponent,
    SeanceComponent,
    SalleComponent,
    SalleprogComponent,
    CompteComponent,
    ReserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    RatingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    CardModule,
    TableModule,
    CommonModule,
    HttpClientModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule,
    OverlayPanelModule,
    MultiSelectModule,
    ListboxModule,
    CalendarModule

  ],
  providers: [
    provideClientHydration(),ConfirmationService,MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
