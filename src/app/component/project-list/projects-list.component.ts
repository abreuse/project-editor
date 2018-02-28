import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  handleEventClick(data: any) {
    alert(data);
  }
}
