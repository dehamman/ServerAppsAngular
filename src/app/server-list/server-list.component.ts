import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MetaEntryService } from '../services/metaEntry.service';
import { MetaEntry } from '../models';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servers: MetaEntry[];
  @ViewChild('newName', {static:false}) newName!: ElementRef;

  constructor(private meService: MetaEntryService) { }

  ngOnInit() {
    this.getServers();
  }

  getServers(): void {
    this.meService.getServers().subscribe(result => this.servers = result);
  }

  addServer(name: string): void {
    name = name.trim();
    if (!name) { return; }
    var entry: MetaEntry = { name:name,dateCreated:new Date(), id:-1, entryTypeId:-1, description:""};
    this.meService.saveServer(entry)
      .subscribe(result => {
        if (result > 0) {
          this.servers = [];
          this.getServers();
          this.newName.nativeElement.value = '';
        }
      });
    //this.serversService.saveServer()
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
