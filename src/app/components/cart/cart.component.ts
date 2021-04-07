import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa.service';
import { ActivatedRoute } from '@angular/router'
import {Mesa} from '../../interfaces/Mesa'
import { Router } from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  total:number;
  table:Mesa;
  id:number
  constructor(private router:Router,private MesaService: MesaService,private activatedRoute: ActivatedRoute) { }
//Cambiar por la mesa dinámica
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
      this.id = params['id']
    })
    this.MesaService.getMesa(this.id)
     .subscribe(
      res=>{
        this.table=res
        this.total=0
      console.log(this.table)
    this.table.pedido.forEach(element => {
      let precio=element.precio
      let cantidad=element.cantidad
      
      this.total+=(precio*cantidad)
      console.log(this.total);
    });
      
      
      
      },
      err=>console.log(err)
    )
    
  }
  pay(){
    this.MesaService.Liberarmesa(this.table)
    .subscribe(
      res=>{
        this.router.navigate(['/Gracias'])
        
      },
      err=>console.log(err)
    )
    
  }
  getWaiter(){
    alert("En un momento llega tu mesero")
  }
  gotoPlatillos(){
    this.router.navigate(['/platillos',this.table])
  }

  
}
