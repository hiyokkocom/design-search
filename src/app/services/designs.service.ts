import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Designs } from "../classes/designs";

@Injectable()
export class DesignsService {

  constructor(private http: Http) { }

  fetch(): Observable<Designs> {
    return this.http
    .get(`./assets/data/designs/index.json`)
    .map((response) => {
      return new Designs(response.json());
    });
  }
}
