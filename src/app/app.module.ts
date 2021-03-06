import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailComponent } from './app-detail/app-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ServerListComponent },
      { path: 'details/:id', component: ServerDetailComponent },
      { path: 'apps', component: AppListComponent },
      { path: 'apps/:id', component: AppDetailComponent },
      
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ServerListComponent,
    ServerDetailComponent,
    AppListComponent,
    AppDetailComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
