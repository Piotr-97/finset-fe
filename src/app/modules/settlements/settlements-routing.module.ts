import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettlementFormComponent} from "./components/settlement-form/settlement-form.component";
import {SettlementsTableComponent} from "./components/settlements-table/settlements-table.component";
import {StatusViewComponent} from "./components/status-view/status-view.component";


const routes: Routes = [{ path : 'addsettlement', component : SettlementFormComponent},
  { path : 'settlements', component : SettlementsTableComponent},
  { path : 'check-statuses', component : StatusViewComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementsRoutingModule {

}
