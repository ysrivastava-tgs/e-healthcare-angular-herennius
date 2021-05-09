import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMedicineCategoryListComponent } from './user-medicine-category-list/user-medicine-category-list.component';
import { SortDirective } from '../directive/sort.directive';
import { UserMedicineListComponent } from './user-medicine-list/user-medicine-list.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { UserConfirmPageComponent } from './user-confirm-page/user-confirm-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOrderListComponent } from './user-order-list/user-order-list.component';
import { UserOrderDetailsComponent } from './user-order-details/user-order-details.component';



@NgModule({
  declarations: [
    UserMedicineCategoryListComponent,
    UserMedicineListComponent,
    UserAddToCartComponent,
    UserConfirmPageComponent,
    UserOrderListComponent,
    UserOrderDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
