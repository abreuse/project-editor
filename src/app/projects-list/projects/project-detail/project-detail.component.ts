import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: any;

  constructor() { }

  ngOnInit() {
    this.project = {
      name: 'My project',
      date: '2018-02-25',
      techs: ['Angular', 'Karma']
    };
  }

}
