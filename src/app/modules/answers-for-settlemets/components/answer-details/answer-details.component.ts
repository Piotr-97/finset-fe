import {Component, OnInit} from '@angular/core';
import {AnswerForSettlement} from "../../../core/models/project.model";
import {AnswerForSettlementService} from "../../../core/services/answer-for-settlement.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.css']
})
export class AnswerDetailsComponent implements OnInit{
  answer: AnswerForSettlement = {
    uuid: '12345',
    date: '2024-06-26',
    settlements: [],
    answerForSettlement: 'Answer',
    settlementAnswerStatus: 'Status'
  };

  constructor(private route: ActivatedRoute, private answerForSettlementService:AnswerForSettlementService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (param) => {
          let uuid = param.get('uuid');
          console.log(uuid)
          this.answerForSettlementService.getAnswerForSettlementByUuid(uuid).subscribe(data => {
            this.answer = data;
          });
        }
      }
    )
  }
}
