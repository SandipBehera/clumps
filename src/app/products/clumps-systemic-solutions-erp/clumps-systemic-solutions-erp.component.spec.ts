import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClumpsSystemicSolutionsERPComponent } from './clumps-systemic-solutions-erp.component';

describe('ClumpsSystemicSolutionsERPComponent', () => {
  let component: ClumpsSystemicSolutionsERPComponent;
  let fixture: ComponentFixture<ClumpsSystemicSolutionsERPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClumpsSystemicSolutionsERPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClumpsSystemicSolutionsERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
