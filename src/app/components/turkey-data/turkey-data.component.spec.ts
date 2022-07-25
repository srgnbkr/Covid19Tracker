import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurkeyDataComponent } from './turkey-data.component';

describe('TurkeyDataComponent', () => {
  let component: TurkeyDataComponent;
  let fixture: ComponentFixture<TurkeyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurkeyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
