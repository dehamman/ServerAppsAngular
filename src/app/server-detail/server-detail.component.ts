import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { servers } from '../servers';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.css']
})
export class ServerDetailComponent implements OnInit {

  server;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.server = servers[+params.get('serveridx')];
  });
  }

}