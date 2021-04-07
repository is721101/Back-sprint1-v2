import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pedido} from '../interfaces/Mesa'
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  URI='Http://localhost:3000/menu/pedido'

  constructor(private http: HttpClient) { }


  createPedido(platilloSelected){
    return this.http.post(this.URI,platilloSelected);
  }

  getPedidos(mesa){
    let x= this.http.get<Pedido[]>(this.URI+"/"+mesa)
    console.log(x)
    return x;
  }
  
}
