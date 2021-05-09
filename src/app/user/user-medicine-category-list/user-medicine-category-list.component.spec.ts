import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicineCategoryListComponent } from './user-medicine-category-list.component';

describe('UserMedicineCategoryListComponent', () => {
  let component: UserMedicineCategoryListComponent;
  let fixture: ComponentFixture<UserMedicineCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMedicineCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMedicineCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
