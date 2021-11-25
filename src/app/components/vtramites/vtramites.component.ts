import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tramitesI} from '../../model/tramiteI';
import {StramitesService } from '../../services/stramites.service';

@Component({
  selector: 'app-vtramites',
  templateUrl: './vtramites.component.html',
  styleUrls: ['./vtramites.component.css']
})
export class VtramitesComponent implements OnInit {

  tramiteForm = new FormGroup({
    nombre : new FormControl( '', Validators.required ),
    anio : new FormControl( '', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(1111), Validators.max(9999)]),
    desc : new FormControl( '', Validators.required ),
    persona : new FormControl( '', Validators.required ),
    funcionario : new FormControl( '', Validators.required )
  })

  listaTramites: tramitesI[] = [];
  

  constructor(private api: StramitesService, private router: Router) {}

  public IdReg:any;

  ngOnInit(): void {
    this.getTramites();
  }

  getTramites(){    
     this.api.getInfo().subscribe(data => {          
      console.log(data);  
      let jsonObj: any = data;   
      this.listaTramites = <tramitesI[]> jsonObj;  
    });
  }

  addTramite(form : any){
    console.log(form);
    console.log(this.IdReg);
    if (this.IdReg == null){
      const Tramites: tramitesI = {  
        id: this.IdReg,
        name: this.tramiteForm.get('nombre')?.value,
        anio: this.tramiteForm.get('anio')?.value,
        description: this.tramiteForm.get('desc')?.value,
        person: this.tramiteForm.get('persona')?.value,
        funcionario: this.tramiteForm.get('funcionario')?.value
      }
      console.log(Tramites);
  
      this.api.addOne(Tramites).subscribe(data => {       
        console.log(JSON.stringify(data));
      }, error =>{
        console.log(JSON.stringify(error));
        
        location.reload();
        
      });
    }

    else{
      const Tramites: tramitesI = {  
        id: this.IdReg,
        name: this.tramiteForm.get('nombre')?.value,
        anio: this.tramiteForm.get('anio')?.value,
        description: this.tramiteForm.get('desc')?.value,
        person: this.tramiteForm.get('persona')?.value,
        funcionario: this.tramiteForm.get('funcionario')?.value
      }

      this.api.update(Tramites).subscribe(data => {       
        console.log(JSON.stringify(data));
      }, error =>{
        console.log(JSON.stringify(error));
        
        location.reload();
        
      });

    }


  }

  editTramite(e:tramitesI){
    console.log(e);
    this.IdReg = "";

     this.tramiteForm.setValue({
      nombre: e.name,
      anio: e.anio,
      desc: e.description,
      persona: e.person,
      funcionario: e.funcionario
    });

    this.IdReg = e.id;

  }

}
