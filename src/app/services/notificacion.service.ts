import { Injectable } from '@angular/core';
import {HttpClient, HttpParamsOptions} from '@angular/common/http'
import {notificacion} from 'src/App/interfaces/Notificacion'
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  URI='Http://localhost:3000/notificacion'
  constructor(private http: HttpClient) { }
  createNotificacion(newNotificacion:any){
    return this.http.post(this.URI,newNotificacion);
  }
  recibirNotificaciones(){
    return this.http.get<notificacion>(this.URI);
  }
  ServirNotificacion(id:number){
    return this.http.put(this.URI,id);
  }
}
 