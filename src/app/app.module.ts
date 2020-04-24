import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailComponent } from './app-detail/app-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ServerListComponent },
      { path: 'details/:serveridx', component: ServerDetailComponent },
      { path: 'apps', component: AppListComponent },
      { path: 'apps/:appidx', component: AppDetailComponent },
      
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ServerListComponent,
    ServerDetailComponent,
    AppListComponent,
    AppDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/