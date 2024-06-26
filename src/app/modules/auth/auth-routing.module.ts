import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AccountActivationComponent} from "./components/account-activation/account-activation.component";
import {PasswordRecoveryComponent} from "./components/password-recovery/password-recovery.component";
import {PasswordRecoveryFormComponent} from "./components/password-recovery-form/password-recovery-form.component";

const routes: Routes = [{ path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'activate/:uid', component : AccountActivationComponent},
  { path : 'recover-password', component : PasswordRecoveryComponent},
  { path : 'password-recover/:uid', component : PasswordRecoveryFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
