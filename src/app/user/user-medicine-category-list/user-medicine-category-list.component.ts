import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicinecategory } from 'src/app/classes/medicinecategory';
import { LoginService } from 'src/app/services/behaviour-services/login.service';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';

@Component({
  selector: 'app-user-medicine-category-list',
  templateUrl: './user-medicine-category-list.component.html',
  styleUrls: ['./user-medicine-category-list.component.css']
})
export class UserMedicineCategoryListComponent implements OnInit {
  medicinecategory : Medicinecategory[];
  constructor(private medicine_category: MedicineCategoryService,private router: Router,private behavior_subjct:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subjct.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    this.medicine_category.getAllMedicineCategory().subscribe(
      resp => {
        this.medicinecategory = resp;
      }
    );
   // console.log(this.medicinecategory);
  }
  getmedicinelistbycategory(med_id,med_name)
  {
      this.router.navigate(['./User/Medicine-List'],{queryParams:{medicine_id:med_id,medicine_name:med_name}});
  }
}
