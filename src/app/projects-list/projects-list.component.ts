import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects = [];

  project = {
    name: 'My project',
    date: '2018-02-25',
    techs: ['Angular', 'Karma']
  };

  constructor() { }

  ngOnInit() {
    this.projects.push(this.project);
    this.projects.push(this.project);
    this.projects.push(this.project);
    this.projects.push(this.project);
  }

  handleEventClick(data: any) {
    console.log(data);
  }
}
