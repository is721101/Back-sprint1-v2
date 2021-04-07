import { Component, OnInit } from '@angular/core';
import {PlatillosService} from "../../services/platillos.service"
import { Router } from '@angular/router'
import {MesaService} from '../../services/mesa.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private platilloService:PlatillosService,private router:Router,private mesaService:MesaService) { }

  ngOnInit(): void {
  }

  validate(mesa,id) {
    this.mesaService.getMesa(mesa.value)
    .subscribe(
      res=>{
        if(res.codigo!=id.value){
          alert("Codigo incorrecto")
        }
        else{
          console.log(res)
          this.router.navigate(['/platillos',mesa.value])
        }
      },
      err=>console.log("Mesa no existente")
    )
    
    return false
  }
 

}
