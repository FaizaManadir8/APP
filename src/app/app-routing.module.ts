import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'sidebar', component: SidebarComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'mesdemandes', component: MesdemandesComponent },
  { path: 'lesdecision', component: LesdecisionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
