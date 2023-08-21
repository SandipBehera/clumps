import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClumpsMarketingSuiteComponent } from './clumps-marketing-suite.component';

describe('ClumpsMarketingSuiteComponent', () => {
  let component: ClumpsMarketingSuiteComponent;
  let fixture: ComponentFixture<ClumpsMarketingSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClumpsMarketingSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClumpsMarketingSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
