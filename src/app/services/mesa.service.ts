import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {Mesa} from '../interfaces/Mesa'
@Injectable({
  providedIn: 'root'
})
export class MesaService {
  URI='Http://localhost:3000/mesa'
  constructor(private http: HttpClient) { }
  getMesa(id:Number){
    return this.http.get<Mesa>(this.URI+"/"+id);
  }
  OcuparMesa(){
    return this.http.get<Mesa>("Http://localhost:3000/ordenar");
  } 
  Liberarmesa(id){
    return this.http.put<Mesa>(this.URI+"/",id);
  }
}
