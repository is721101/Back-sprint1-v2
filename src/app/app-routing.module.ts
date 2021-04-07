import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../app/components/login/login.component'
import {PlatillosComponent} from '../app/components/platillos/platillos.component'
import { CartComponent } from './components/cart/cart.component';
import {OrdenarComponent} from './components/ordenar/ordenar.component';
import {AgradecimientoComponent} from './components/agradecimiento/agradecimiento.component'
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"platillos/:id",component:PlatillosComponent},
  {path:"cuenta/:id",component:CartComponent},
  {path:"ordenar",component:OrdenarComponent},
  {path:"Gracias",component:AgradecimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
