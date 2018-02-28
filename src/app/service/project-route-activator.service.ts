import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {ProjectService} from './project.service';

@Injectable()
export class ProjectRouteActivatorService implements CanActivate {

  constructor(private projectService: ProjectService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const projectExists = !!this.projectService.getProject(+route.params['id']); //cast to boolean

    if(!projectExists)
      this.router.navigate(['/404']);

    return projectExists;
  }

}
