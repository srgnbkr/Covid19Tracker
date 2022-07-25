import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDataCountryComponent } from './weekly-data-country.component';

describe('WeeklyDataCountryComponent', () => {
  let component: WeeklyDataCountryComponent;
  let fixture: ComponentFixture<WeeklyDataCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyDataCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDataCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
