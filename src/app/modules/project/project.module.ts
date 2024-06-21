import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsFormComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
