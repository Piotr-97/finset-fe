import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client, Project, ProjectRequest, ProjectCodeResponse} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {

  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}`);
  }

  getProjectByUuid(uuid:string) :Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${uuid}`);
  }
  addNewProject(body: ProjectRequest) :Observable<ProjectCodeResponse> {
    return this.http.post<ProjectCodeResponse>(`${this.apiUrl}`, body);
  }




  /*
  *  resetPassword(body: ResetPasswordData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, body)
  }
  * */


  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clients`);
  }
}
