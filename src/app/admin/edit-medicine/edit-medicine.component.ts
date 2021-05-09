import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/classes/medicine';
import { Medicinecategory } from 'src/app/classes/medicinecategory';
import { MedicineCategoryService } from 'src/app/services/medicine-category.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit{

  editMedicineForm: FormGroup;
  medicinecate:Medicinecategory[];
  med_details:Medicine;
  flag :boolean = false;
  constructor(private medi_cate_service:MedicineCategoryService,private medi_service: MedicineService,private router: Router,private route: ActivatedRoute,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }
ngOnInit(): void {
   
   
   
    this.loadcategory();
    this.route.queryParamMap.subscribe(
      params =>{
          this.medi_service.getMedDetails(params.get('cateid'),params.get('medid')).subscribe(
            resp =>{
                this.med_details = resp;
                console.log(this.med_details);
                this.flag = true;
                if(this.med_details){
                  this.editMedicineForm = new FormGroup({
                    medicineid : new FormControl(this.med_details['medicine_Id'],Validators.required),
                    
                     medicinename : new FormControl(this.med_details['medicine_Name'],Validators.required),
                     medicineimage : new FormControl(this.med_details['medicine_Img_Url'],Validators.required),
                     medicineprice : new FormControl(this.med_details['medicine_Price'],Validators.required),
                     medicineseller : new FormControl(this.med_details['medicine_Seller'],Validators.required),
                     medicinedescription : new FormControl(this.med_details['medicine_Description'],Validators.required),
                     medicineqty : new FormControl(this.med_details['medicine_Qty'],Validators.required),
                     medicinecategory: new FormControl(),
                  });
                }
            }
          );
      }
    );
   
  }
  submit(){
    let json = this.editMedicineForm.value;
    let cate_id_catename = json.medicinecategory.split("|");
    console.log(json.medicinecategory);
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
    this.medi_service.editMedicine(obj).subscribe(
      resp => {
        console.log(resp);
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
  load(){
    //console.log('load',this.med_details);
    
  }
}
