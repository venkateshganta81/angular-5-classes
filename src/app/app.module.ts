import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProductDevelopmentComponent } from './services/product-development/product-development.component';
import { HackerSharkComponent } from './services/hacker-shark/hacker-shark.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HttpModule } from '@angular/http';
import { AppServices } from './app.service';


const routes : Routes = [
  { path:'' , redirectTo : '/home' , pathMatch : 'full' },
  { path : 'home' , component : HomeComponent },
  { path : 'about-us' , component : AboutUsComponent },
  { path : 'services' , component : ServicesComponent , children : [
    { path : '' , redirectTo : '/services/hacker-shark' , pathMatch : 'full'},
    { path : 'product-development' , component : ProductDevelopmentComponent },
    { path : 'hacker-shark' , component : HackerSharkComponent }
  ] },
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
    ServicesComponent,
    ProductDevelopmentComponent,
    HackerSharkComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
