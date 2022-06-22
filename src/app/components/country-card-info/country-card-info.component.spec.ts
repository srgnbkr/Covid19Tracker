import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardInfoComponent } from './country-card-info.component';

describe('CountryCardInfoComponent', () => {
  let component: CountryCardInfoComponent;
  let fixture: ComponentFixture<CountryCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
