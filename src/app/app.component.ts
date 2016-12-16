import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdInput } from '@angular/material';

import { Sites } from './classes/sites';
import { Site } from './classes/site';
import { Tags } from './classes/tags';
import { Designs } from './classes/designs';

import { SitesService } from './services/sites.service';
import { TagsService } from './services/tags.service';
import { DesignsService } from './services/designs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('tagInput') tagInput: MdInput;

  sites = new Sites();
  tags = new Tags();
  designs = new Designs();

  constructor(
    private tagsServ: TagsService,
    private designsServ: DesignsService,
    private sitesServ: SitesService
  ) {
    sitesServ.fetch()
    .subscribe((data: Sites) => {
      this.sites = data;
    });

    tagsServ.fetch()
    .subscribe((data: Tags) => {
      this.tags = data;
    });

    designsServ.fetch()
    .subscribe((data: Designs) => {
      this.designs = data;
    });
  }
  // ngAfterViewInit() {
  //   this.tagInput.focus();
  // }

  getSitesByUuid(uuid: string): Observable<Array<Site>> {
    return Observable.from(this.sites.Items)
    .filter((site) => {
      return site.uuid === uuid;
    })
    .map((site) => {
      return [site];
    });
  }
}
