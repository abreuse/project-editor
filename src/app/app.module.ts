import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './component/projects-list/projects-list.component';
import { ProjectComponent } from './component/projects/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './component/project-detail/project-detail.component';
import { Page404Component } from './component/page-404/page-404.component';
import {ProjectService} from './service/project.service';
import {ProjectRouteActivatorService} from './service/project-route-activator.service';

const appRoutes: Routes = [
  {path:'projects', component: ProjectsListComponent},
  {path:'projects/:id', component: ProjectDetailComponent,
    canActivate: [ProjectRouteActivatorService],
    canDeactivate: ['canDeactiveProject']
  },
  {path:'', redirectTo: '/projects', pathMatch: 'full'},
  {path:'404', component: Page404Component},
  {path:'**', component: Page404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectComponent,
    ProjectDetailComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProjectService,
    ProjectRouteActivatorService,
    { provide: 'canDeactiveProject', useValue: validateBack}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function validateBack(component: ProjectDetailComponent) {
  if(component.hasToValidateBack)
    return window.confirm('Are you sure you want to go back ?');

  return true;
}
