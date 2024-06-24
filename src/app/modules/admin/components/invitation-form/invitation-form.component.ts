import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormService} from "../../../core/services/form.service";

import {NotifierService} from "angular-notifier";
import {SenderService} from "../../../core/services/sender.service";

@Component({
  selector: 'app-invitation-form',
  templateUrl: './invitation-form.component.html',
  styleUrls: ['./invitation-form.component.css']
})
export class InvitationFormComponent {
  invitationForm: FormGroup = this.formService.initInvitationForm();
  errorMessage: null | string = null;
  constructor(private formService: FormService, private senderService: SenderService, private notifierService: NotifierService) {
  }

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }
  get controls() {
    return this.invitationForm.controls;
  }

  onSendInvitation() {
    this.senderService.sendInvitation(this.invitationForm.getRawValue()).subscribe({
      next: value => {
        this.notifierService.notify('success', 'Invitation sent!');
      },
      error: (err) => {
        this.errorMessage = err
      }

    });
  }

}
