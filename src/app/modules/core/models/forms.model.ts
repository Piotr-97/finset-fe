import {FormControl} from "@angular/forms";

export interface LoginForm {
  password: FormControl<string>;
  login: FormControl<string>;
}

export interface PasswordsForm{
  password: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface RegisterForm extends LoginForm{
  repeatedPassword: FormControl<string>;
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  mobilePhone: FormControl<string>;
}

export interface PasswdRecoveryForm{
  email: FormControl<string>;
}
export interface ChangePasswordData{
  password:string;
  uid:string;
}
