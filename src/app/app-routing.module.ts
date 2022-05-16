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
import { SidebarComponent } from './sidebar/sidebar.component';
import { AprposComponent } from './aprpos/aprpos.component';
import { ConsulterdemandechefComponent } from './chef/consulterdemandechef/consulterdemandechef.component';
import { LesdemandeschefComponent } from './chef/lesdemandeschef/lesdemandeschef.component';
import { ProfilchefComponent } from './chef/profilchef/profilchef.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AjouteragentComponent } from './responsable/ajouteragent/ajouteragent.component';
import { AjouterdecisionComponent } from './responsable/ajouterdecision/ajouterdecision.component';
import { AviComponent } from './responsable/avi/avi.component';
import { ConsulterdecisionComponent } from './responsable/consulterdecision/consulterdecision.component';
import { ConsulterdemanComponent } from './responsable/consulterdeman/consulterdeman.component';
import { LesagentsComponent } from './responsable/lesagents/lesagents.component';
import { LesavisComponent } from './responsable/lesavis/lesavis.component';
import { LesdecisionsComponent } from './responsable/lesdecisions/lesdecisions.component';
import { LesdemandesComponent } from './responsable/lesdemandes/lesdemandes.component';
import { ModifieragentComponent } from './responsable/modifieragent/modifieragent.component';
import { ProfilresComponent } from './responsable/profilres/profilres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprpos', component: AprposComponent },
  { path: 'contacteznous', component: ContacteznousComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'sidebar', component: SidebarComponent,
  children:[
    { path: '', component: ProfilComponent },
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
      /* Responsable*/
      { path: 'lesagents', component: LesagentsComponent },
      { path: 'lesdemandes', component: LesdemandesComponent },
      { path: '', component: ProfilresComponent },
      { path: 'ajouteragent', component: AjouteragentComponent },
      { path: 'lesavis', component: LesavisComponent },
      { path: 'lesdecisions', component: LesdecisionsComponent },
      { path: 'modifieragent', component: ModifieragentComponent },
      { path: 'consulterdeman', component: ConsulterdemanComponent },
      { path: 'avi', component: AviComponent },
      { path: 'ajouterdecision', component: AjouterdecisionComponent },
      { path: 'consulterdecision', component: ConsulterdecisionComponent },
      /*Chef*/
      { path: '', component: ProfilchefComponent },
      { path: 'lesdemandeschef', component: LesdemandeschefComponent },
      { path: 'consulterdemandechef', component: ConsulterdemandechefComponent },
      
  ]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
