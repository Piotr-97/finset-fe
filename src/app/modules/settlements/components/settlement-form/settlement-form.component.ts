import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormService} from "../../../core/services/form.service";
import {AddSettlementForm, PasswordsForm} from "../../../core/models/forms.model";
@Component({
  selector: 'app-settlement-form',
  templateUrl: './settlement-form.component.html',
  styleUrls: ['./settlement-form.component.css']
})
export class SettlementFormComponent {
  addSettlementForm: FormGroup<AddSettlementForm> = this.formService.initAddSettlementForm();


  constructor(private formService: FormService) {}
  get controls(): AddSettlementForm {
    return this.addSettlementForm.controls;
  }

  onAddSettlement() {

  }
}
