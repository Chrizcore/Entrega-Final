import { ViewPromosComponent } from './componentes/view-promos/view-promos.component';
import { ShowProfileComponent } from './componentes/show-profile/show-profile.component';
import { LoginWithPhoneComponent } from './componentes/login-with-phone/login-with-phone.component';
import { FormReactiveComponent } from './componentes/form-reactive/form-reactive.component';
import { RegistrationComponent } from './componentes/registration/registration.component';
import { UserloginComponent } from './componentes/userlogin/userlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/componentes/home/home.component';
import { ContactoComponent } from '../app/componentes/contacto/contacto.component';
import { PreFrecComponent } from '../app/componentes/pre-frec/pre-frec.component';
import { AcercaDeComponent } from '../app/componentes/acerca-de/acerca-de.component';
import { LoginComponent} from '../app/componentes/login/login.component';
import { AdminComponent } from '../app/componentes/admin/admin.component';
import { MyBarChartComponent } from './componentes/my-bar-chart/my-bar-chart.component';
import { CreateDateComponent } from './componentes/create-date/create-date.component';
import { ShowDatesComponent } from './componentes/show-dates/show-dates.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contac', component: ContactoComponent},
  {path: 'preF', component: PreFrecComponent},
  {path: 'userlogin', component: UserloginComponent},
  {path: 'acerca', component: AcercaDeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginWithPhone', component: LoginWithPhoneComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'createDate', component: CreateDateComponent},
  {path: 'showDates', component: ShowDatesComponent},
  {path: 'showProfile', component: ShowProfileComponent},
  {path: 'viewPromo', component: ViewPromosComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'formreactive', component: FormReactiveComponent},
  {path: 'my-bar-chart', component: MyBarChartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // viejo truco del usehas para no recargar la pagina
  exports: [RouterModule]
})
export class AppRoutingModule { }
