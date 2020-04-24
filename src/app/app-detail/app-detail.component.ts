import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apps } from '../apps';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  app;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.app = apps[+params.get('appidx')];
  });
  }

}