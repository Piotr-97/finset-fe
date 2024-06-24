import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsFormComponent} from "./components/projects-form/projects-form.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ProjectDetailsComponent} from "./components/project-details/project-details.component";

const routes: Routes = [
  { path : 'addproject', component : ProjectsFormComponent},
  { path : 'projects', component : ProjectsComponent},
  { path : 'details/:uuid', component : ProjectDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
