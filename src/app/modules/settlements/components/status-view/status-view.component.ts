import { Component } from '@angular/core';
import {Settlement} from "../../../core/models/project.model";
import {SettlementService} from "../../../core/services/settlement.service";

@Component({
  selector: 'app-status-view',
  templateUrl: './status-view.component.html',
  styleUrls: ['./status-view.component.css']
})
export class StatusViewComponent {


  displayedColumns: string[] = ['uuid', 'status', 'settlementType', 'projectId', 'workId', 'amountOfMoney', 'description', 'date'];
  dataSource : Settlement[] = [];

  constructor(private settlementService: SettlementService) {}

  ngOnInit(): void {
    this.settlementService.getSettlementsByEmployeeUuid().subscribe(data => {
      this.dataSource = data;
    });
  }
}
