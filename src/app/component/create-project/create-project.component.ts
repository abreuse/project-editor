import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  mouseOverSubmit: boolean;

  constructor(private projectService: ProjectService,
              private router:Router) { }

  ngOnInit() {
  }

  createProject(project) {
    this.projectService.createProject(project);
    this.router.navigate(['/projects']);
  }

  cancel() {
    this.router.navigate(['/projects']);
  }
}
