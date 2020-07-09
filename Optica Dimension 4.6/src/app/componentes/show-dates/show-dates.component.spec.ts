import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDatesComponent } from './show-dates.component';

describe('ShowDatesComponent', () => {
  let component: ShowDatesComponent;
  let fixture: ComponentFixture<ShowDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
