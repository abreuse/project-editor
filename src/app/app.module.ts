import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectComponent } from './projects-list/projects/project.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './projects-list/projects/project-detail/project-detail.component';
import { Page404Component } from './page-404/page-404.component';

const appRoutes: Routes = [
  {path:'projects', component: ProjectsListComponent},
  {path:'projects/:id', component: ProjectDetailComponent},
  {path:'', redirectTo: '/projects', pathMatch: 'full'},
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
