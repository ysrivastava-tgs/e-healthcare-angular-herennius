import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmPageComponent } from './user-confirm-page.component';

describe('UserConfirmPageComponent', () => {
  let component: UserConfirmPageComponent;
  let fixture: ComponentFixture<UserConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
