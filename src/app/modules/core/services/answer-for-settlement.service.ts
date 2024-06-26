import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AnswerForSettlement} from "../models/project.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnswerForSettlementService {

  apiUrl = `${environment.apiUrl}/accountant`;

  constructor(private http: HttpClient) {

  }
  getAnswerForSettlementByUuid(uuid: string | null) {
    return this.http.get<AnswerForSettlement>(`${this.apiUrl}/accountant/${uuid}`);
  }

  getAllAnswerForSettlements():Observable<AnswerForSettlement[]> {
    return this.http.get<AnswerForSettlement[]>(`${this.apiUrl}/accountant`);
  }
}
