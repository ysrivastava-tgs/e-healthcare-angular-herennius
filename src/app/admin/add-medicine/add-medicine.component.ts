import { Router } from '@angular/router';
import { MedicineService } from './../../services/medicine.service';
import { Medicinecategory } from './../../classes/medicinecategory';
import { MedicineCategoryService } from './../../services/medicine-category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Medicine } from 'src/app/classes/medicine';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  addMedicineForm: FormGroup;
  medicinecate:Medicinecategory[];
  constructor(private medi_cate_service:MedicineCategoryService,private medi_service: MedicineService,private router: Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    this.addMedicineForm = new FormGroup({
      medicineid : new FormControl('',[
        Validators.required,
       ]),
      
       medicinename : new FormControl('',[Validators.required]),
       medicineimage : new FormControl('',[Validators.required]),
       medicineprice : new FormControl(0.0,[Validators.required]),
       medicineseller : new FormControl('',[Validators.required]),
       medicinedescription : new FormControl('',[Validators.required]),
       medicineqty : new FormControl(0,[Validators.required]),
       medicinecategory: new FormControl(),
    });
    this.loadcategory();
  }
  submit(){
    let json = this.addMedicineForm.value;
    console.log(json.medicinecategory);
    let cate_id_catename = json.medicinecategory.split("|");
    let obj = new Medicine();
    obj.Category_Id = cate_id_catename[0].trim();
    obj.Category_Name = cate_id_catename[1].trim();
    obj.Medicine_Description = json.medicinedescription;
    obj.Medicine_Id = json.medicineid;
    obj.Medicine_Img_Url = json.medicineimage;
    obj.Medicine_Name = json.medicinename;
    obj.Medicine_Price = json.medicineprice;
    obj.Medicine_Qty = json.medicineqty;
    obj.Medicine_Seller = json.medicineseller;
    this.medi_service.addMedicine(obj).subscribe(
      resp =>{
        this.router.navigate(['./Medicine-List'],{queryParams:{medicine_id:obj.Category_Id}});
      }
    );
  }
  loadcategory(){
    this.medi_cate_service.getAllMedicineCategory().subscribe(
      resp =>{
          this.medicinecate = resp;
      }
    );
  }
}
