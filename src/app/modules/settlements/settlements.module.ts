import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettlementsRoutingModule } from './settlements-routing.module';
import { SettlementFormComponent } from './components/settlement-form/settlement-form.component';
import { SettlementsTableComponent } from './components/settlements-table/settlements-table.component';
import { StatusViewComponent } from './components/status-view/status-view.component';
import {AuthRoutingModule} from "../auth/auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    SettlementFormComponent,
    SettlementsTableComponent,
    StatusViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettlementsRoutingModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
  ]
})
export class SettlementsModule { }
