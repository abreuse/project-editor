import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  handleEventClick(data: any) {
    alert(data);
  }
}
