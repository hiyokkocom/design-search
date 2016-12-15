import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MdInput } from '@angular/material';

import { Tags } from './classes/tags';
import { Designs } from './classes/designs';

import { TagsService } from './services/tags.service';
import { DesignsService } from './services/designs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('tagInput') tagInput: MdInput;

  tags = new Tags();
  designs = new Designs();

  constructor(
    private tagServ: TagsService,
    private designServ: DesignsService
  ) {
    tagServ.fetch()
    .subscribe((data: Tags) => {
      this.tags = data;
    });

    designServ.fetch()
    .subscribe((data: Designs) => {
      this.designs = data;
    });
  }
  // ngAfterViewInit() {
  //   this.tagInput.focus();
  // }
}
