import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleData {

  constructor(public http: Http) {
    console.log('Hello PeopleData Provider');
  }

  getPeople() {
    // return this.http.get('https://randomuser.me/api/?results=10&nat=us&seed=d07ade5f51ff3011')
    return this.http.get('data/data.json')
    .map(res => res.json())
    .map(res => res.items);
  }

}
