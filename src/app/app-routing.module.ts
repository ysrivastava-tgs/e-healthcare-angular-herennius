import { UserGuardGuard } from './auth/user-guard.guard';
import { UserOrderDetailsComponent } from './user/user-order-details/user-order-details.component';
import { UserOrderListComponent } from './user/user-order-list/user-order-list.component';
import { UserConfirmPageComponent } from './user/user-confirm-page/user-confirm-page.component';
import { UserAddToCartComponent } from './user/user-add-to-cart/user-add-to-cart.component';
import { UserMedicineListComponent } from './user/user-medicine-list/user-medicine-list.component';
import { UserMedicineCategoryListComponent } from './user/user-medicine-category-list/user-medicine-category-list.component';

import { EditMedicineComponent } from './admin/edit-medicine/edit-medicine.component';
import { AddMedicineComponent } from './admin/add-medicine/add-medicine.component';
import { AuthGuard } from './auth/auth.guard';
import { MedicineDetailsComponent } from './common/medicine-details/medicine-details.component';
import { MedicineListComponent } from './admin/medicine-list/medicine-list.component';
import { AddMedicineCategoryComponent } from './admin/add-medicine-category/add-medicine-category.component';
import { MedicineCategoryListComponent } from './admin/medicine-category-list/medicine-category-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'Register', component : RegisterComponent
  },
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Medicine-Category', component: MedicineCategoryListComponent,  canActivate:[AuthGuard]
  },
  {
    path: 'Add-Medicine-Category', component: AddMedicineCategoryComponent, canActivate:[AuthGuard]
  },
  {
    path: 'Medicine-List', component: MedicineListComponent,  canActivate:[AuthGuard]
  },
  {
    path: 'Medicine-Details', component:MedicineDetailsComponent
  },
  {
    path: 'Add-Medicine', component:AddMedicineComponent
  },
  {
    path: 'Edit-Medicine', component: EditMedicineComponent
  },
  {
    path:'User', children:[
      {
        path: 'Medicine-Category', component:UserMedicineCategoryListComponent
      },
      {
        path: 'Medicine-List', component:UserMedicineListComponent
      },
      {
        path: 'Add-To-Cart', component:UserAddToCartComponent
      },
      {
        path:'Confirm-Page', component:UserConfirmPageComponent, canActivate: [UserGuardGuard]
      },
      {
        path:'Order-List', component:UserOrderListComponent, canActivate:[UserGuardGuard]
      },
      {
        path:'Order-Details', component:UserOrderDetailsComponent,canActivate:[UserGuardGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
