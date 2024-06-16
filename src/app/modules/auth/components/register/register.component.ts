import {Component, OnDestroy} from '@angular/core';
import {FormService} from "../../../core/services/form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RegisterForm} from "../../../core/models/forms.model";
import * as AuthActions from '../../store/auth.actions'
import {Store} from "@ngrx/store";
import { AppState } from '../../../../store/app.reducer';
import {Observable} from "rxjs";
import {selectAuthError, selectAuthLoading} from "../../store/auth.selectors";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy{

  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();

  notMatchingPasswordsErr: null | string = null;

  errorMsg$: Observable<string | null> = this.store.select(selectAuthError);
  loading$: Observable<boolean> = this.store.select(selectAuthLoading);

  constructor(private formService: FormService,private store: Store<AppState>) {
  }


  get controls(): RegisterForm {
    return this.registerForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  onRegister() {
    const {login,password,repeatedPassword,lastname,firstname,mobilePhone} = this.registerForm.getRawValue();
    if(password !== repeatedPassword){
      this.notMatchingPasswordsErr = "Passwords don't match";
      return;
    }
    this.store.dispatch(
      AuthActions.register({ registerData: { email: login, password,firstname,lastname,mobilePhone } })
    );

  }

  ngOnDestroy(){
    this.store.dispatch(AuthActions.clearError());
  }
}
