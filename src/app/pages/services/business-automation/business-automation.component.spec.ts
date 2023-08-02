import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAutomationComponent } from './business-automation.component';

describe('BusinessAutomationComponent', () => {
  let component: BusinessAutomationComponent;
  let fixture: ComponentFixture<BusinessAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
