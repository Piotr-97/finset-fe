import {Injectable} from '@angular/core';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {LoginForm, PasswdRecoveryForm, PasswordsForm, RegisterForm} from "../models/forms.model";
import {equivalentValidators} from "../../shared/validators/equivalent.validator";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  initPasswdRecoveryForm(): FormGroup<PasswdRecoveryForm>    {
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
          {validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)], nonNullable: true})
      }
    )
  }



  initPasswordsForm(): FormGroup<PasswordsForm> {
    return new FormGroup({
        password: new FormControl('',
          {validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true}),
        repeatedPassword: new FormControl('',
          {validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)
            ],
            nonNullable: true
          }),
      },{validators:[equivalentValidators('password','repeatedPassword')]}
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
          {validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(25)], nonNullable: true}),
      repeatedPassword: new FormControl('',
        {validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)], nonNullable: true}),
      firstname: new FormControl('',
        {validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)], nonNullable: true}),
      lastname: new FormControl('',
        {validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)], nonNullable: true}),
      mobilePhone: new FormControl('',
        {validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25)], nonNullable: true}),

      }
    )
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
    if (control.hasError('email')){
      return "login should be an email address";
    }

    if(control.hasError('passwordNotEqual')){
      return "Password must match";
    }
    return '';
  }
}
