import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { Constante } from '../model/constante';

@Injectable()
export class DesafioService {

  constructor(public http: Http) { 
    
  }

  findAll(){
    return this.http.get(Constante.URL).pipe(map( response => {
      return response.json();
    }));
  }

  findVogal(val){
    return this.http.post(Constante.URL, val).pipe(
      map(res => {return res.json()}));
  }
}
