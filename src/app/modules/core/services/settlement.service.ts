import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Settlement} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  apiUrl = `${environment.apiUrl}/financialsettlement`;
  constructor(private http: HttpClient) {}

  getSettlementsByEmployeeUuid() : Observable<Settlement[]> {
    let uuid = sessionStorage.getItem("uuid");
    return this.http.get<Settlement[]>(`${this.apiUrl}/employee/${uuid}`);

  }

  getSettlementsByWorkUnderProject(worksUuid: string | null): Observable<Settlement[]>  {
    return this.http.get<Settlement[]>(`${this.apiUrl}/work/${worksUuid}`);
  }

}
