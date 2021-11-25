import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tramitesI } from '../model/tramiteI';

@Injectable({
  providedIn: 'root'
})
export class StramitesService {

  url = 'http://localhost:8080/tramite/';
   

    constructor(private http: HttpClient) { }

    getInfo():Observable<tramitesI[]>{
      
      return this.http.get<tramitesI[]>(this.url + "getAll");
    }

    del(id: any):Observable<string>{    
      return this.http.get<string>(this.url + "delete/"+id);
    }

    addOne(est: tramitesI){
      return this.http.post(this.url+'add', est); 
    }

    update(est: tramitesI){
      return this.http.post(this.url+'update/'+est.id, est); 
    }
}
