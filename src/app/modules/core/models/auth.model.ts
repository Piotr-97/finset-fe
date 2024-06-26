
export interface IUser{
   email: string;
   role: string;
   token:string;
   uuid: string;

}
export class User implements IUser{
  constructor(public email: string, public role: string, public token: string, public uuid: string) {

  }
}


export interface LoginData {
  login: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  mobilePhone: string;
}

export interface AuthResponse {
  message: string;
  code: string;
}
export interface ResetPasswordData{
  email: string;
}

export interface InvitationData{
  email: string;
}
export interface UserData {
  email: string;
  role: string;
}

