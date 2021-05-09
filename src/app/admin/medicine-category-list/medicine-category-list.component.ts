import { Router } from '@angular/router';
import { Medicinecategory } from './../../classes/medicinecategory';
import { MedicineCategoryService } from './../../services/medicine-category.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-medicine-category-list',
  templateUrl: './medicine-category-list.component.html',
  styleUrls: ['./medicine-category-list.component.css']
})
export class MedicineCategoryListComponent implements OnInit {
  medicinecategory : Medicinecategory[];
  constructor(private medicine_category: MedicineCategoryService,private router: Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
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
  add(){
    this.router.navigate(['./Add-Medicine-Category']);
  }
  getmedicinelistbycategory(med_id)
  {
      this.router.navigate(['./Medicine-List'],{queryParams:{medicine_id:med_id}});
  }
}
