import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthResponse, InvitationData} from "../models/auth.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  apiUrl = `${environment.apiUrl}/sender`;

  constructor(private http: HttpClient) {}

  sendInvitation(body: InvitationData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/invite`, body)
  }
}
