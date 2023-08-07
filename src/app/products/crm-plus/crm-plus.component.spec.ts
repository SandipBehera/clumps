import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPlusComponent } from './crm-plus.component';

describe('CrmPlusComponent', () => {
  let component: CrmPlusComponent;
  let fixture: ComponentFixture<CrmPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
