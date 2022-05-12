import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AprposComponent } from './aprpos/aprpos.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faB, faR, fas, faS } from '@fortawesome/free-solid-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './agent/sidebar/sidebar.component';
import { ProfilComponent } from './agent/profil/profil.component';
<<<<<<< HEAD
import { MesdemandesComponent } from './agent/mesdemandes/mesdemandes.component';
import { LesdecisionComponent } from './agent/lesdecision/lesdecision.component';
=======
<<<<<<< HEAD
import { CongemaladieComponent } from './agent/congemaladie/congemaladie.component';
import { CongematerniteComponent } from './agent/congematernite/congematernite.component';
import { ConsulteravisComponent } from './agent/consulteravis/consulteravis.component';
import { ConsulterdemandeComponent } from './agent/consulterdemande/consulterdemande.component';
import { DecisionComponent } from './agent/decision/decision.component';
=======
import { AvisComponent } from './agent/avis/avis.component';
import { AvisretourComponent } from './agent/avisretour/avisretour.component';
import { CongeadministratifComponent } from './agent/congeadministratif/congeadministratif.component';
import { CongeexceptionnelComponent } from './agent/congeexceptionnel/congeexceptionnel.component';
>>>>>>> 7e2043ab80ee9a61062bff67786e0a26f7d00c60
>>>>>>> b5d5226a33c9f3df48f7d950b70be597e87d1bef

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AprposComponent,
    ContacteznousComponent,
    LoginComponent,
    SidebarComponent,
    ProfilComponent,
<<<<<<< HEAD
    MesdemandesComponent,
    LesdecisionComponent,
=======
<<<<<<< HEAD
    CongemaladieComponent,
    CongematerniteComponent,
    ConsulteravisComponent,
    ConsulterdemandeComponent,
    DecisionComponent,
=======
    AvisComponent,
    AvisretourComponent,
    CongeadministratifComponent,
    CongeexceptionnelComponent,
>>>>>>> 7e2043ab80ee9a61062bff67786e0a26f7d00c60
>>>>>>> b5d5226a33c9f3df48f7d950b70be597e87d1bef
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
