import { Injectable } from '@angular/core';
import {Project} from '../model/project.model';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

let PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Metal game solid',
    date: new Date('2018-02-25'),
    techs: ['Unity3D', 'Voxel']
  },
  {
    id: 2,
    name: 'Ecommerce',
    date: new Date('2018-01-10'),
    techs: ['Angular', 'Prestashop']
  },
  {
    id: 3,
    name: 'Gestion des courriels',
    date: new Date('2018-02-20'),
    techs: ['ServiceNow']
  },
  {
    id: 4,
    name: 'Toz o Rus',
    date: new Date('2017-12-05'),
    techs: ['Java', 'Spring']
  }
];

@Injectable()
export class ProjectService {

  constructor() { }

  id: number = 6;

  getProjects():Observable<Project[]> {
    let subject = new Subject<Project[]>();
    setTimeout(() => { subject.next(PROJECTS); subject.complete(); }, 100);

    return subject;
  }

  getProject(id: number):Project {
    return PROJECTS.find(project => project.id === id);
  }

  createProject(project: Project) {
    this.id = PROJECTS[PROJECTS.length - 1].id;
    this.id++;
    project.id = this.id;
    PROJECTS.push(project);
  }
}
