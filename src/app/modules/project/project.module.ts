import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatTableModule} from "@angular/material/table";
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectUpdateFormComponent } from './components/project-update-form/project-update-form.component';
import { WorksSettlementsViewComponent } from './components/works-settlements-view/works-settlements-view.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsFormComponent,
    ProjectDetailsComponent,
    ProjectUpdateFormComponent,
    WorksSettlementsViewComponent
  ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
    ]
})
export class ProjectModule { }
