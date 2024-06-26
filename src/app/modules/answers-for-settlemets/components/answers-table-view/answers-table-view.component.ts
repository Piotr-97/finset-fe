import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AnswerForSettlement} from "../../../core/models/project.model";
import {AnswerForSettlementService} from "../../../core/services/answer-for-settlement.service";

@Component({
  selector: 'app-answers-table-view',
  templateUrl: './answers-table-view.component.html',
  styleUrls: ['./answers-table-view.component.css']
})
export class AnswersTableViewComponent implements OnInit{
  displayedColumns: string[] = ['uuid', 'date', 'answerForSettlement', 'settlementAnswerStatus', 'settlements'];
  answer: AnswerForSettlement[] = [
    {
      uuid: '12345',
      date: '2024-06-26',
      settlements: [],
      answerForSettlement: 'Answer',
      settlementAnswerStatus: 'Status'
    },
    {
      uuid: '67890',
      date: '2024-06-27',
      settlements: [],
      answerForSettlement: 'Answer 2',
      settlementAnswerStatus: 'Inny status'
    }
  ];
  constructor(private answerForSettlementService: AnswerForSettlementService) { }

  ngOnInit(): void {
    this.answerForSettlementService.getAllAnswerForSettlements().subscribe(data => {
      this.answer = data;
    });
  }

}
