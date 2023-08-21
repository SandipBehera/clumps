import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClumpsEcommerceSuiteComponent } from './clumps-ecommerce-suite.component';

describe('ClumpsEcommerceSuiteComponent', () => {
  let component: ClumpsEcommerceSuiteComponent;
  let fixture: ComponentFixture<ClumpsEcommerceSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClumpsEcommerceSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClumpsEcommerceSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
