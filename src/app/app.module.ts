import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdenarComponent } from './components/ordenar/ordenar.component';
import { OrdenComponent } from './orden/orden.component';
import { AgradecimientoComponent } from './components/agradecimiento/agradecimiento.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    PlatillosComponent,
    CartComponent,
    OrdenarComponent,
    OrdenComponent,
    AgradecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
