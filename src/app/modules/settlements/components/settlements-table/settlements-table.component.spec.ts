import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementsTableComponent } from './settlements-table.component';

describe('SettlementsTableComponent', () => {
  let component: SettlementsTableComponent;
  let fixture: ComponentFixture<SettlementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
