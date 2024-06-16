import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FormService} from "../../../core/services/form.service";
import {PasswordsForm} from "../../../core/models/forms.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-password-recovery-form',
  templateUrl: './password-recovery-form.component.html',
  styleUrls: ['./password-recovery-form.component.css']
})
export class PasswordRecoveryFormComponent implements OnInit {

  passwordsForm: FormGroup<PasswordsForm> = this.formService.initPasswordsForm();
  uid: string = '';
  errorMessage : null | string = null;

  get controls(): PasswordsForm {
    return this.passwordsForm.controls;
  }

  constructor(private formService: FormService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private notifierService: NotifierService,
              private router: Router) {
  }

  getErrorMessage(control: FormControl<string>): string {
    return this.formService.getErrorMessage(control);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (param) => {
          this.uid = param.get('uid') as string;
        }
      }
    )
  }

  onPasswordChange() {
    const {password, repeatedPassword} = this.passwordsForm.getRawValue();
    this.authService.changePassword({password, uid: this.uid}).subscribe(
      {
        next: (param) => {
          this.router.navigate(['login'])
          this.notifierService.notify("success",'Password changed successfully.')
        }, error:err => {
            this.errorMessage = err;
        }
      }
    )
  }
}
