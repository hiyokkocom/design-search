import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Tags } from "../classes/tags";

@Injectable()
export class TagsService {

  constructor(private http: Http) { }

  fetch(): Observable<Tags> {
    return this.http
    .get(`./assets/data/tags/index.json`)
    .map((response) => {
      return new Tags(response.json());
    });
  }
}
