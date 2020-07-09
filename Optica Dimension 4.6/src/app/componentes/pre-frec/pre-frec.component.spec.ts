import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFrecComponent } from './pre-frec.component';

describe('PreFrecComponent', () => {
  let component: PreFrecComponent;
  let fixture: ComponentFixture<PreFrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreFrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreFrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
