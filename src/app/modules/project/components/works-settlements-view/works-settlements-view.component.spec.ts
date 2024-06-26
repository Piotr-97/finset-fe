import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksSettlementsViewComponent } from './works-settlements-view.component';

describe('WorksSettlementsViewComponent', () => {
  let component: WorksSettlementsViewComponent;
  let fixture: ComponentFixture<WorksSettlementsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksSettlementsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksSettlementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
