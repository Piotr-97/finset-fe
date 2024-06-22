import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project, ProjectResponse} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = `${environment.apiUrl}/project`;

  constructor(private http: HttpClient) {

  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}`);
  }

  getProjectByUuid(uuid:string) :Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${uuid}`);
  }
  addNewProject(body: ProjectResponse) :Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/project`, body);
  }




  /*
  *  resetPassword(body: ResetPasswordData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password`, body)
  }
  * */


}
