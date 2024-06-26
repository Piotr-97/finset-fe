import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Settlement} from "../../../core/models/project.model";
import {SettlementService} from "../../../core/services/settlement.service";

@Component({
  selector: 'app-works-settlements-view',
  templateUrl: './works-settlements-view.component.html',
  styleUrls: ['./works-settlements-view.component.css']
})
export class WorksSettlementsViewComponent implements OnInit{
  displayedColumns: string[] = ['uuid', 'status', 'settlementType', 'projectId', 'workId', 'amountOfMoney', 'description', 'employeeId', 'nameAndLastname', 'date'];


  settlements: Settlement[] =[]
  constructor(private route: ActivatedRoute,private settlementService: SettlementService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (param) => {
          let uuid = param.get('uuid');
          console.log(uuid)
          this.settlementService.getSettlementsByWorkUnderProject(uuid).subscribe(data => {
            this.settlements = data;
          });
        }
      }
    )
  }


}
