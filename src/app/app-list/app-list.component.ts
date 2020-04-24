import { Component } from '@angular/core';

import { apps } from '../apps';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent {
  apps = apps;

}
