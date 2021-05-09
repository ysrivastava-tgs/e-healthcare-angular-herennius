import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicineListComponent } from './user-medicine-list.component';

describe('UserMedicineListComponent', () => {
  let component: UserMedicineListComponent;
  let fixture: ComponentFixture<UserMedicineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMedicineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
