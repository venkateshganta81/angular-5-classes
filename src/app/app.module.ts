import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppServices } from './app.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { AuthGaurd } from './services/authGaurd.service';
import { ServicesModule } from './services/services.module';
import { DynamicComponentComponent } from './about-us/dynamic-component/dynamic-component.component';
import { FilterPipe } from './filter.pipe';


const routes : Routes = [
  { path:'' , redirectTo : '/home' , pathMatch : 'full' },
  { path : 'home' , component : HomeComponent },
  { path : 'about-us' , component : AboutUsComponent},
    { path: 'about-us/:id' , component:DynamicComponentComponent } ,
  { path : 'services' , loadChildren : './services/services.module#ServicesModule' },
  { path : 'register' , component : RegisterComponent },
  { path : 'login' , component : LoginComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponentComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    DynamicComponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule
  ],
  providers: [
    AppServices,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi: true
    },
    AuthGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
