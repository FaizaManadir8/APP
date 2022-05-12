import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisComponent } from './agent/avis/avis.component';
import { AvisretourComponent } from './agent/avisretour/avisretour.component';
import { CongeadministratifComponent } from './agent/congeadministratif/congeadministratif.component';
import { CongeexceptionnelComponent } from './agent/congeexceptionnel/congeexceptionnel.component';
import { CongemaladieComponent } from './agent/congemaladie/congemaladie.component';
import { CongematerniteComponent } from './agent/congematernite/congematernite.component';
import { ConsulteravisComponent } from './agent/consulteravis/consulteravis.component';
import { ConsulterdemandeComponent } from './agent/consulterdemande/consulterdemande.component';
import { DecisionComponent } from './agent/decision/decision.component';
import { LesdecisionComponent } from './agent/lesdecision/lesdecision.component';
import { MesdemandesComponent } from './agent/mesdemandes/mesdemandes.component';
import { ProfilComponent } from './agent/profil/profil.component';
import { SidebarComponent } from './agent/sidebar/sidebar.component';
import { AprposComponent } from './aprpos/aprpos.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprpos', component: AprposComponent },
  { path: 'contacteznous', component: ContacteznousComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'sidebar', component: SidebarComponent,
  children:[
    { path: 'profil', component: ProfilComponent },
    { path: 'mesdemandes', component: MesdemandesComponent },
    { path: 'decision', component: DecisionComponent },
    { path: 'consulterdemande', component: ConsulterdemandeComponent },
    { path: 'consulteravis', component: ConsulteravisComponent },
 { path: 'congematernite', component: CongematerniteComponent },
  { path: 'congemaladie', component: CongemaladieComponent },
  { path: 'congeexceptionnel', component: CongeexceptionnelComponent },
  { path: 'congeadministratif', component: CongeadministratifComponent },
  { path: 'avisretour', component: AvisretourComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'lesdecision', component: LesdecisionComponent },
  ]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
