import { SharedModule } from './../shared/shared.module';
import { SortDirective } from './../directive/sort.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineCategoryListComponent } from './medicine-category-list/medicine-category-list.component';
import { AddMedicineCategoryComponent } from './add-medicine-category/add-medicine-category.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';



@NgModule({
  declarations: [
    MedicineCategoryListComponent,
   AddMedicineCategoryComponent,
   MedicineListComponent,
   AddMedicineComponent,
   EditMedicineComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
