import { Component, OnInit } from '@angular/core';
import {PlatillosService} from "../../services/platillos.service"
import {MesaService} from '../../services/mesa.service'
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.less']
})
export class OrdenarComponent implements OnInit {

  constructor(private platilloService:PlatillosService,private mesaService:MesaService) { }

  ngOnInit(): void {
  }
  ordenar(correo){
    this.mesaService.OcuparMesa()
    .subscribe(
      res=>{
        alert("Num de mesa: "+res.id+" Codigo: "+res.codigo)
        return false;
        
      },
      err=>{
        alert("Todas las mesas se encuentran llenas, Espere un momento")
        console.log(err)
      }
    )
  }
}
