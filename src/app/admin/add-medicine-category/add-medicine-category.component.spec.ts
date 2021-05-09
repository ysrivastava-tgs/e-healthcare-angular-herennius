import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineCategoryComponent } from './add-medicine-category.component';

describe('AddMedicineCategoryComponent', () => {
  let component: AddMedicineCategoryComponent;
  let fixture: ComponentFixture<AddMedicineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicineCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
