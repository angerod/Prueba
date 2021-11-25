import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarioI} from '../model/usuarioI'
@Injectable({
  providedIn: 'root'
})
export class SlistausuariosService {

  url = 'https://gorest.co.in/public/v1/users';
   

    constructor(private http: HttpClient) { }


  getInfoInterface():Observable<usuarioI[]>{
    return this.http.get<usuarioI[]>(this.url);
  }

}
