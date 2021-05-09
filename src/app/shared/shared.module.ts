import { SortDirective } from './../directive/sort.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SortDirective],
  imports: [
    CommonModule
  ],
  exports: [SortDirective]
})
export class SharedModule { }
