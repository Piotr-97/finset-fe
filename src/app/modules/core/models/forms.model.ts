import {FormControl} from "@angular/forms";

export interface LoginForm {
  password: FormControl<string>;
  login: FormControl<string>;
}

export interface PasswordsForm {
  password: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface RegisterForm extends LoginForm {
  repeatedPassword: FormControl<string>;
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  mobilePhone: FormControl<string>;
}

export interface PasswdRecoveryForm {
  email: FormControl<string>;
}

export interface InvitationForm {
  email: FormControl<string>;
}

export interface ChangePasswordData {
  password: string;
  uid: string;
}

export interface AddSettlementForm {
  settlementType: FormControl<string>;
  projectId: FormControl<string>;
  workId: FormControl<string>;
  address: FormControl<string>;
  startAddress: FormControl<string | null>;
  targetAddress: FormControl<string | null>;
  country: FormControl<string | null>;
  amountOfMoney: FormControl<string>;
  description: FormControl<string>;
}

export interface ProjectForm {
  name:FormControl<string>;
  clientUuid:FormControl<string>;
}

export interface WorkUnderProjectForm {
  name:FormControl<string>;
  projectUuid:FormControl<string>;
  description:FormControl<string>;
}

export interface AddressForm{
  address: FormControl<string>;
}

export interface ClientForm{
  nip: FormControl<string>;
  name:FormControl<string>;
  address: FormControl<string>;
}

export interface AnswerForSettlementForm{
  settlementType: FormControl<string>;
  settlementUUID:FormControl<string>;
  settlementAnswerStatus:FormControl<string>;
  description:FormControl<string>;

}


