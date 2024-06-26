import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { InvitationFormComponent } from './components/invitation-form/invitation-form.component';
import {SharedModule} from "../shared/shared.module";
import { ChangingRoleTableComponent } from './components/changing-role-table/changing-role-table.component';
import {UserData} from "../core/models/auth.model";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    InvitationFormComponent,
    ChangingRoleTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class AdminModule {

}
