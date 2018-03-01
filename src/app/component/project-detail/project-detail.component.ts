import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../service/project.service';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  hasToValidateBack: boolean = true;
  project: Project;

  constructor(private projectService: ProjectService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.project = this.projectService.getProject(+this.route.snapshot.params['id'])
  }

  navigateBack() {
    this.router.navigate(['/projects']);
  }
}
