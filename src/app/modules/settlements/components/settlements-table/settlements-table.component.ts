import { Component } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {FormService} from "../../../core/services/form.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-settlements-table',
  templateUrl: './settlements-table.component.html',
  styleUrls: ['./settlements-table.component.css']
})
export class SettlementsTableComponent {
  displayedColumns: string[] = ['Project', 'work', 'Settlement id', 'Status', 'Amount of money', 'Date'];
  // dataSource = ELEMENT_DATA;
  apiUrl = ` ${environment.apiUrl}/settlements`;


}
