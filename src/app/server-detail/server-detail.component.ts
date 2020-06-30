import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaEntryService } from '../services/metaEntry.service';
import { MetaEntry } from '../models';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {

  server;

  constructor(private route: ActivatedRoute,private meService: MetaEntryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.getServer(+params.get('id'));
  });
  }

  getServer(id: number): void {
    this.meService.getEntry(id).subscribe(result => this.server = result);
  }

}