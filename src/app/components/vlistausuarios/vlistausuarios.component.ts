import { Component, OnInit } from '@angular/core';
import { usuarioI } from '../../model/usuarioI';
import {SlistausuariosService } from '../../services/slistausuarios.service';
@Component({
  selector: 'app-vlistausuarios',
  templateUrl: './vlistausuarios.component.html',
  styleUrls: ['./vlistausuarios.component.css']
})
export class VlistausuariosComponent implements OnInit {

  listaUsr : usuarioI[] = [];

  constructor(private api:SlistausuariosService ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){    
    this.api.getInfoInterface().subscribe(data => {         
         console.log(data);
         let jsonObj: any = data;
         this.listaUsr = <usuarioI[]> jsonObj.data;
       
   }, error =>{
     console.log(JSON.stringify(error));
   });
 }

}
