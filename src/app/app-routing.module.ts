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
import { AuthGuardService } from './login/auth-guard.service';
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
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      { path: '', component: ProfilComponent, canActivate: [AuthGuardService] },
      {
        path: 'mesdemandes',
        component: MesdemandesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'decision',
        component: DecisionComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consulterdemande',
        component: ConsulterdemandeComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consulteravis',
        component: ConsulteravisComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'congematernite',
        component: CongematerniteComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'congemaladie',
        component: CongemaladieComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'congeexceptionnel',
        component: CongeexceptionnelComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'congeadministratif',
        component: CongeadministratifComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'avisretour',
        component: AvisretourComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'avis',
        component: AvisComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'lesdecision',
        component: LesdecisionComponent,
        canActivate: [AuthGuardService],
      },
      /* Responsable*/
      {
        path: 'lesagents',
        component: LesagentsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'lesdemandes',
        component: LesdemandesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: '',
        component: ProfilresComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'ajouteragent',
        component: AjouteragentComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'lesavis',
        component: LesavisComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'lesdecisions',
        component: LesdecisionsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'modifieragent',
        component: ModifieragentComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consulterdeman',
        component: ConsulterdemanComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'avis',
        component: AviComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'ajouterdecision',
        component: AjouterdecisionComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consulterdecision',
        component: ConsulterdecisionComponent,
        canActivate: [AuthGuardService],
      },
      /*Chef*/
      {
        path: '',
        component: ProfilchefComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'lesdemandeschef',
        component: LesdemandeschefComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'consulterdemandechef',
        component: ConsulterdemandechefComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
