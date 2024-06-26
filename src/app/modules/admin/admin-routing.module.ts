import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvitationFormComponent} from "./components/invitation-form/invitation-form.component";
import {ChangingRoleTableComponent} from "./components/changing-role-table/changing-role-table.component";

const routes: Routes = [
  { path : 'invite', component : InvitationFormComponent},
  { path : 'change-role', component : ChangingRoleTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
