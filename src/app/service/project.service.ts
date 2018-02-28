import { Injectable } from '@angular/core';

const PROJECTS = [
  {
    id: 1,
    name: 'Metal game solid',
    date: '2018-02-25',
    techs: ['Unity3D', 'Voxel']
  },
  {
    id: 2,
    name: 'Ecommerce',
    date: '2018-01-10',
    techs: ['Angular', 'Prestashop']
  },
  {
    id: 3,
    name: 'Gestion des courriels',
    date: '2018-02-20',
    techs: ['ServiceNow']
  },
  {
    id: 4,
    name: 'Toz o Rus',
    date: '2017-12-05',
    techs: ['Java', 'Spring']
  }
];

@Injectable()
export class ProjectService {

  constructor() { }


  getProjects() {
    return PROJECTS;
  }

  getProject(id) {
    return PROJECTS.find(project => project.id === id);
  }
}
