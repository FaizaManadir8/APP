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
import { AuthGuardService } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprpos', component: AprposComponent },
  { path: 'contacteznous', component: ContacteznousComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'sidebar', component: SidebarComponent,
  children:[
    { path: '', component: ProfilComponent, canActivate : [AuthGuardService] },
    { path: 'mesdemandes', component: MesdemandesComponent, canActivate : [AuthGuardService] },
    { path: 'decision', component: DecisionComponent, canActivate : [AuthGuardService] },
    { path: 'consulterdemande', component: ConsulterdemandeComponent , canActivate : [AuthGuardService]},
    { path: 'consulteravis', component: ConsulteravisComponent , canActivate : [AuthGuardService]},
 { path: 'congematernite', component: CongematerniteComponent, canActivate : [AuthGuardService] },
  { path: 'congemaladie', component: CongemaladieComponent,canActivate : [AuthGuardService] },
  { path: 'congeexceptionnel', component: CongeexceptionnelComponent,canActivate : [AuthGuardService] },
  { path: 'congeadministratif', component: CongeadministratifComponent,canActivate : [AuthGuardService] },
  { path: 'avisretour', component: AvisretourComponent,canActivate : [AuthGuardService] },
  { path: 'avis', component: AvisComponent,canActivate : [AuthGuardService] },
  { path: 'lesdecision', component: LesdecisionComponent, canActivate : [AuthGuardService] },
  ]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
