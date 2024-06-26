import { TestBed } from '@angular/core/testing';

import { AnswerForSettlementService } from './answer-for-settlement.service';

describe('AnswerforsettlementService', () => {
  let service: AnswerForSettlementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerForSettlementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
