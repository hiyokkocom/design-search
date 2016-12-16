import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import 'hammerjs';
import 'rxjs/add/observable/from';

import { AppComponent } from './app.component';

import { SitesService } from './services/sites.service';
import { TagsService } from './services/tags.service';
import { DesignsService } from './services/designs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MasonryModule
  ],
  providers: [
    SitesService,
    TagsService,
    DesignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
