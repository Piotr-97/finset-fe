import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettlementFormComponent} from "../settlements/components/settlement-form/settlement-form.component";
import {AnswersFormComponent} from "./components/answers-form/answers-form.component";
import {AnswersTableViewComponent} from "./components/answers-table-view/answers-table-view.component";
import {AnswerDetailsComponent} from "./components/answer-details/answer-details.component";

const routes: Routes = [{ path : 'add-answer', component : AnswersFormComponent},
  { path : 'view-answer', component : AnswersTableViewComponent},
  { path : 'answer-details/:uid', component : AnswerDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswersForSettlementsRoutingModule { }
