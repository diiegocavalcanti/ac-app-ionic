import { Observable } from 'rxjs/Observable';
import { pokemon } from './../../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the PokeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeProvider {

 url = 'https://api.github.com/orgs/github/public_members'; 

  constructor(private http: HttpClient) {
   
  }

  getPokes(): Observable<pokemon[]>{
    return this.http.get<pokemon[]>(this.url);
  }
  

}
