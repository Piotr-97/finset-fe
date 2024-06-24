import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvitationFormComponent} from "./components/invitation-form/invitation-form.component";

const routes: Routes = [
  { path : 'invite', component : InvitationFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
