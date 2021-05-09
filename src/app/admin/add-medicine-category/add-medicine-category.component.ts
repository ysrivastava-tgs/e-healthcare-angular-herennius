import { Router } from '@angular/router';
import { MedicineCategoryService } from './../../services/medicine-category.service';
import { Medicinecategory } from './../../classes/medicinecategory';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-add-medicine-category',
  templateUrl: './add-medicine-category.component.html',
  styleUrls: ['./add-medicine-category.component.css']
})
export class AddMedicineCategoryComponent implements OnInit {
  addcategoryForm: FormGroup;
  get categoryid(){
    return this.addcategoryForm.get('categoryid');
  }
  get categoryname(){
    return this.addcategoryForm.get("categoryname");
  }
  constructor(private medicinecategoryservice: MedicineCategoryService,private router: Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    this.addcategoryForm = new FormGroup({
      categoryid : new FormControl('',[
        Validators.required,
       ]),
      
       categoryname : new FormControl('',[Validators.required]),
    
    });
  }
  submit(){
    
   if(localStorage.getItem('role')=='Admin' || localStorage.getItem('ADMIN'))
   {
    
    let json = this.addcategoryForm.value;
    let obj = new Medicinecategory();
    obj.Category_Id = json.categoryid;
   obj.Category_Name = json.categoryname;
   
   this.medicinecategoryservice.addMedicineCategory(obj).subscribe(
     resp => this.router.navigate(['./Medicine-Category']),
     err => console.log(err)
   );
   }
    else if(localStorage.getItem('role')=='User' || localStorage.getItem('USER'))
    {
     
        this.router.navigate(['./']);
    }
    
  }
}
