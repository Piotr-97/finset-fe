import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ChangePasswordData} from "../models/forms.model";
import {AuthResponse, InvitationData, IUser, LoginData, RegisterData, ResetPasswordData} from "../models/auth.model";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {

  }

  login(body: LoginData): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/login`, body)
     .pipe(
       tap(response => this.handleLoginResponse(response))
     );
  }

  logout(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/logout`)
  }

  register(body: RegisterData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, body)
  }

  resetPassword(body: ResetPasswordData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, body)
  }

  changePassword(body: ChangePasswordData): Observable<AuthResponse> {
    return this.http.patch<AuthResponse>(`${this.apiUrl}/reset-password`, body)
  }

  private handleLoginResponse(response: IUser) {
    const token = response.token;
    this.storeToken(token);
    this.storeRole(response);
    this.storeUuid(response)
  }

  private storeRole(response: IUser) {
    sessionStorage.setItem("role", response.role)
  }
  private storeUuid(response: IUser) {
    sessionStorage.setItem("uuid", response.uuid)
  }

  private storeToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }



}
