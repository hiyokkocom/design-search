import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Sites } from "../classes/sites";

@Injectable()
export class SitesService {

  constructor(private http: Http) { }

  fetch(): Observable<Sites> {
    return this.http
    .get(`./assets/data/sites/index.json`)
    .map((response) => {
      return new Sites(response.json());
    });
  }
}
