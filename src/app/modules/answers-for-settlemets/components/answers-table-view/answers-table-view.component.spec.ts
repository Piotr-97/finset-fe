import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersTableViewComponent } from './answers-table-view.component';

describe('AnswersTableViewComponent', () => {
  let component: AnswersTableViewComponent;
  let fixture: ComponentFixture<AnswersTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswersTableViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswersTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
