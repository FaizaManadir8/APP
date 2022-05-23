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
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfilComponent } from './agent/profil/profil.component';
import { MesdemandesComponent } from './agent/mesdemandes/mesdemandes.component';
import { LesdecisionComponent } from './agent/lesdecision/lesdecision.component';
import { CongemaladieComponent } from './agent/congemaladie/congemaladie.component';
import { CongematerniteComponent } from './agent/congematernite/congematernite.component';
import { ConsulteravisComponent } from './agent/consulteravis/consulteravis.component';
import { ConsulterdemandeComponent } from './agent/consulterdemande/consulterdemande.component';
import { DecisionComponent } from './agent/decision/decision.component';
import { AvisComponent } from './agent/avis/avis.component';
import { AvisretourComponent } from './agent/avisretour/avisretour.component';
import { CongeadministratifComponent } from './agent/congeadministratif/congeadministratif.component';
import { CongeexceptionnelComponent } from './agent/congeexceptionnel/congeexceptionnel.component';
import { ProfilresComponent } from './responsable/profilres/profilres.component';
import { LesagentsComponent } from './responsable/lesagents/lesagents.component';
import { AjouteragentComponent } from './responsable/ajouteragent/ajouteragent.component';
import { LesdemandesComponent } from './responsable/lesdemandes/lesdemandes.component';
import { LesavisComponent } from './responsable/lesavis/lesavis.component';
import { LesdecisionsComponent } from './responsable/lesdecisions/lesdecisions.component';
import { ModifieragentComponent } from './responsable/modifieragent/modifieragent.component';
import { ConsulterdemanComponent } from './responsable/consulterdeman/consulterdeman.component';
import { AviComponent } from './responsable/avi/avi.component';
import { AjouterdecisionComponent } from './responsable/ajouterdecision/ajouterdecision.component';
import { ConsulterdecisionComponent } from './responsable/consulterdecision/consulterdecision.component';
import { LesdemandeschefComponent } from './chef/lesdemandeschef/lesdemandeschef.component';
import { ProfilchefComponent } from './chef/profilchef/profilchef.component';
import { ConsulterdemandechefComponent } from './chef/consulterdemandechef/consulterdemandechef.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteCongeComponent } from './delete-conge/delete-conge.component';
import { UpdateCongeComponent } from './update-conge/update-conge.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UpdatedecisionComponent } from './updatedecision/updatedecision.component';
import { DeletdecisionComponent } from './deletdecision/deletdecision.component';
import { UpdateavisComponent } from './updateavis/updateavis.component';
import { DeleteavisComponent } from './deleteavis/deleteavis.component';




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
    MesdemandesComponent,
    LesdecisionComponent,
    CongemaladieComponent,
    CongematerniteComponent,
    ConsulteravisComponent,
    ConsulterdemandeComponent,
    DecisionComponent,
    AvisComponent,
    AvisretourComponent,
    CongeadministratifComponent,
    CongeexceptionnelComponent,
    ProfilresComponent,
    LesagentsComponent,
    AjouteragentComponent,
    LesdemandesComponent,
    LesavisComponent,
    LesdecisionsComponent,
    ModifieragentComponent,
    ConsulterdemanComponent,
    AviComponent,
    AjouterdecisionComponent,
    ConsulterdecisionComponent,
    LesdemandeschefComponent,
    ProfilchefComponent,
    ConsulterdemandechefComponent,
    DeleteCongeComponent,
    UpdateCongeComponent,
    UpdatedecisionComponent,
    DeletdecisionComponent,
    UpdateavisComponent,
    DeleteavisComponent,




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
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule 
    // MatInputModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
