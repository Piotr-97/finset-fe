import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsFormComponent} from "./components/projects-form/projects-form.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ProjectDetailsComponent} from "./components/project-details/project-details.component";
import {WorksSettlementsViewComponent} from "./components/works-settlements-view/works-settlements-view.component";

const routes: Routes = [
  { path : 'addproject', component : ProjectsFormComponent},
  { path : 'projects', component : ProjectsComponent},
  { path : 'details/:uuid', component : ProjectDetailsComponent},
  { path : 'works-settlement-detail/:uuid', component : WorksSettlementsViewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
