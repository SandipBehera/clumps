import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailSuiteComponent } from './retail-suite.component';

describe('RetailSuiteComponent', () => {
  let component: RetailSuiteComponent;
  let fixture: ComponentFixture<RetailSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
