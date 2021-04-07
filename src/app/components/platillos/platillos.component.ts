import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PedidosService } from 'src/app/services/pedidos.service';
import {PlatillosService} from '../../services/platillos.service';
import {NotificacionService} from '../../services/notificacion.service'
import {MesaService} from '../../services/mesa.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.less']
})
export class PlatillosComponent implements OnInit {
  codigo:string;
  platillos=[];
  table:Number;
  platilloSelected={
    price:null,
    description:null,
    name:null,
    amount:0,
    table:null
  }
  constructor(private router:Router,private platilloService: PlatillosService,private mesaService:MesaService,private pedidoService: PedidosService,private activatedRoute: ActivatedRoute,private notificacionservice:NotificacionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
      this.table = params['id']
    })
    this.mesaService.getMesa(this.table)
    .subscribe(
      res=>{
        this.codigo=res.codigo
        console.log(res)
      }
    )
    this.platilloService.getPlatillos()
    .subscribe(
      res=>this.platillos=res,
      err=>console.log(err)
    )
  }
  //Cada que se abre el modal, se reinician los valores
  loadData(plato){
    this.platilloSelected.name=plato.name
    this.platilloSelected.description=plato.description
    this.platilloSelected.price=plato.price  
    this.platilloSelected.amount=0 
    this.platilloSelected.table=this.table 
  }
  //Suma y resta del modal
  suma(){
    this.platilloSelected.amount++
  }
  resta(){
    if(this.platilloSelected.amount==0){
      alert("No puede pedir cantidades negativas")
  }
  else{
   this.platilloSelected.amount--
  }
  }
  //Envía los pedidos a la base de datos
  sendPedido(){
    this.pedidoService.createPedido(this.platilloSelected)
    .subscribe(
      
      res=>console.log(res),
      err=>console.log(err)
    )
     let newNotificacion={
        Codigo:this.codigo,
        Mesa:this.platilloSelected.table,
        Descripcion:'Servir',
        Platillo:this.platilloSelected.name,
        Cantidad:this.platilloSelected.amount
      }
      /*this.notificacionservice.createNotificacion(newNotificacion)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )*/
  }

  getWaiter(){
    alert("En un momento llega tu mesero")
  }
  gotoCart(){
    console.log(this.table)
    this.router.navigate(['/cuenta',this.table])
    
  }
}
