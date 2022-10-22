import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpListViewComponent } from './emp-list-view.component';

describe('EmpListViewComponent', () => {
  let component: EmpListViewComponent;
  let fixture: ComponentFixture<EmpListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
