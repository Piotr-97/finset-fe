import {Injectable} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {
  AddressForm,
  AddSettlementForm, AnswerForSettlementForm, ClientForm, InvitationForm,
  LoginForm,
  PasswdRecoveryForm,
  PasswordsForm,
  ProjectForm,
  RegisterForm, WorkUnderProjectForm
} from "../models/forms.model";
import {equivalentValidators} from "../../shared/validators/equivalent.validator";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  initPasswdRecoveryForm(): FormGroup<PasswdRecoveryForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,],
        nonNullable: true,
      })
    });
  }

  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
        login: new FormControl('', {
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(8),
            Validators.maxLength(50)],
          nonNullable: true
        }),
        password: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          })
      }
    )
  }


  initPasswordsForm(): FormGroup<PasswordsForm> {
    return new FormGroup({
        password: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),
        repeatedPassword: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)
            ],
            nonNullable: true
          }),
      }, {validators: [equivalentValidators('password', 'repeatedPassword')]}
    )
  }

  initRegisterForm(): FormGroup<RegisterForm> {
    return new FormGroup({
        login: new FormControl('', {
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(8),
            Validators.maxLength(50)],
          nonNullable: true
        }),
        password: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),
        repeatedPassword: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),
        firstname: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),
        lastname: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),
        mobilePhone: new FormControl('',
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true
          }),

      }
    )
  }

  initAddSettlementForm(): FormGroup<AddSettlementForm>{
    return new FormGroup({
      settlementType: new FormControl('',
        {
          validators: [
            Validators.required, ], nonNullable: true
        }),
      projectId: new FormControl('',
        {
          validators: [
            Validators.required,]
          , nonNullable: true
        }),
      workId: new FormControl('',
        {
          validators: [
            Validators.required,]
          , nonNullable: true
        }),
      address: new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)], nonNullable: true
        }),
      startAddress: new FormControl('',
        {
          validators: [
            Validators.required,]
          , nonNullable: false
        }),
      targetAddress: new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)], nonNullable: false
        }),
      country: new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)], nonNullable: false
        }),
      amountOfMoney: new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.min(1)]
            , nonNullable: true
        }),
      description: new FormControl('',
        {
          validators: [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(500)], nonNullable: true
        })

    });
  }

  initProjectForm(): FormGroup<ProjectForm> {
    //  name:FormControl<string>;
    //   clientUUid:FormControl<string>;
    return new FormGroup({
        name: new FormControl('',
          {
            validators: [
              Validators.required,
        ], nonNullable: true
          }),
      clientUuid: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      },
    )
  }

  initWorkUnderProjectForm(): FormGroup<WorkUnderProjectForm> {
    return new FormGroup({
        name: new FormControl('',
          {
            validators: [
              Validators.required,
            ], nonNullable: true
          }),
      projectUuid: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      description: new FormControl('',
        {
          validators: [
            Validators.required,
          ],
          nonNullable: true
        }),
      },
    )
  }

  initClientForm(): FormGroup<ClientForm> {
    return new FormGroup({
        name: new FormControl('',
          {
            validators: [
              Validators.required,
            ], nonNullable: true
          }),
        nip: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
        address: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      },
    )
  }

  initAddressForm(): FormGroup<AddressForm> {
    return new FormGroup({
        address: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      },
    )
  }

  initAnswerForSettlementForm(): FormGroup<AnswerForSettlementForm> {
    return new FormGroup({
      settlementType: new FormControl('',
          {
            validators: [
              Validators.required,
            ], nonNullable: true
          }),
      settlementUUID: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      settlementAnswerStatus: new FormControl('',
          {
            validators: [
              Validators.required,
            ],
            nonNullable: true
          }),
      description: new FormControl('',
        {
          validators: [
            Validators.required,
          ],
          nonNullable: true
        }),
      },
    )
  }

  initInvitationForm(): FormGroup<InvitationForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,],
        nonNullable: true,
      })
    });
  }




  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'Required field';
    }
    if (control.hasError('minlength')) {
      return `Field should be at least ${control.errors?.['minlength']?.requiredLength} signs long`;
    }
    if (control.hasError('maxlength')) {
      return `Field should consist of ${control.errors?.['maxlength']?.requiredLength} signs max`;
    }
    if (control.hasError('email')) {
      return "login should be an email address";
    }

    if (control.hasError('passwordNotEqual')) {
      return "Password must match";
    }
    return '';
  }
}
