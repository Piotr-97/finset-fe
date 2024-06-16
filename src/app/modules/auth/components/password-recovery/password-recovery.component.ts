import {Component} from '@angular/core';
import {FormService} from "../../../core/services/form.service";
import {PasswdRecoveryForm} from "../../../core/models/forms.model";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {

  errorMessage: null | string = null;
  passwdRecoveryForm: FormGroup<PasswdRecoveryForm> = this.formService.initPasswdRecoveryForm();

  constructor(private formService: FormService, private authService: AuthService, private notifierService: NotifierService) {
  }

  getErrorMessage(email: FormControl<string>) {
    return this.formService.getErrorMessage(email);
  }

  onPasswordRecovery() {
    this.authService.resetPassword(this.passwdRecoveryForm.getRawValue()).subscribe({
      next: value => {
        this.notifierService.notify('success', 'Password recovery successfully.');
      },
      error: (err) => {
        this.errorMessage = err
      }

    });
  }
}
