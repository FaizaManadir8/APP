import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprposComponent } from './aprpos/aprpos.component';
import { ContacteznousComponent } from './contacteznous/contacteznous.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aprpos', component: AprposComponent },
  { path: 'contacteznous', component: ContacteznousComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
