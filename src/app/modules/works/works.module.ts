import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksFormComponent } from './components/works-form/works-form.component';
import { WorksViewComponent } from './components/works-view/works-view.component';


@NgModule({
  declarations: [
    WorksFormComponent,
    WorksViewComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
