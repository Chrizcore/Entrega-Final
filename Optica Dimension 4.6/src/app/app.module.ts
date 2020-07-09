import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PreFrecComponent } from './componentes/pre-frec/pre-frec.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import { NgxQRCodeModule } from 'ngx-qrcode2';
// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { UserloginComponent } from './componentes/userlogin/userlogin.component';
import { RegistrationComponent } from './componentes/registration/registration.component';
import { FormReactiveComponent } from './componentes/form-reactive/form-reactive.component';
// forms Reactive
import { ReactiveFormsModule } from '@angular/forms';
import { MyBarChartComponent } from './componentes/my-bar-chart/my-bar-chart.component';
import { LoginWithPhoneComponent } from './componentes/login-with-phone/login-with-phone.component';
import { CreateDateComponent } from './componentes/create-date/create-date.component';
import { ShowDatesComponent } from './componentes/show-dates/show-dates.component';
import { ShowProfileComponent } from './componentes/show-profile/show-profile.component';
import { ViewPromosComponent } from './componentes/view-promos/view-promos.component';
//loading
import { NgxSpinnerModule} from "ngx-spinner";
import { DomseguroPipe } from './domseguro.pipe'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    PreFrecComponent,
    AcercaDeComponent,
    LoginComponent,
    AdminComponent,
    UserloginComponent,
    RegistrationComponent,
    FormReactiveComponent,
    MyBarChartComponent,
    LoginWithPhoneComponent,
    CreateDateComponent,
    ShowDatesComponent,
    ShowProfileComponent,
    ViewPromosComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxQRCodeModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
