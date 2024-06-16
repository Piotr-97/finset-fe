import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule]
})
export class SharedModule { }
