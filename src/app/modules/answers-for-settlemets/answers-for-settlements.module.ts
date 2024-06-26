import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswersForSettlementsRoutingModule } from './answers-for-settlements-routing.module';
import { AnswersTableViewComponent } from './components/answers-table-view/answers-table-view.component';
import { AnswersFormComponent } from './components/answers-form/answers-form.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import { AnswerDetailsComponent } from './components/answer-details/answer-details.component';


@NgModule({
  declarations: [
    AnswersTableViewComponent,
    AnswersFormComponent,
    AnswerDetailsComponent
  ],
  imports: [
    CommonModule,
    AnswersForSettlementsRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ]
})
export class AnswersForSettlementsModule { }
