import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServicesComponent } from './services.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { HackerSharkComponent } from './hacker-shark/hacker-shark.component';



export const childRoutes: Routes = [
  // {path:'',redirectTo : '/services/hacker-shark',pathMatch:'full'},
  { path: '', component: ServicesComponent },
  { path: 'services/product-development', component: ProductDevelopmentComponent },
  { path: 'services/hacker-shark', component: HackerSharkComponent },
  { path: '', redirectTo: '/services/hacker-shark', pathMatch: 'full' },
]



@NgModule({
  declarations: [
    ServicesComponent,
    ProductDevelopmentComponent,
    HackerSharkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
  ],
  providers: [

  ]
})
export class ServicesModule { }
