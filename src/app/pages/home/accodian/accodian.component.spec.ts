import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccodianComponent } from './accodian.component';

describe('AccodianComponent', () => {
  let component: AccodianComponent;
  let fixture: ComponentFixture<AccodianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccodianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccodianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
