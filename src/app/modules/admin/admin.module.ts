import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { InvitationFormComponent } from './components/invitation-form/invitation-form.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    InvitationFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule {

}
