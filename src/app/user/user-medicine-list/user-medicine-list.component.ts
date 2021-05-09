import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/classes/medicine';
import { LoginService } from 'src/app/services/behaviour-services/login.service';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-user-medicine-list',
  templateUrl: './user-medicine-list.component.html',
  styleUrls: ['./user-medicine-list.component.css']
})
export class UserMedicineListComponent implements OnInit {
  medlist: Medicine[];
  category:string;
  constructor(private route: ActivatedRoute,private med_service: MedicineService,private router: Router,private behavior_subjct:LoginService ) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subjct.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
          this.med_service.getAllMedicine(params.get('medicine_id')).subscribe(
            resp => {
              this.category = params.get('medicine_name')
              this.medlist = resp
            }
          )
      }
    );
  }
  getDetails(cateid,medid){
    this.router.navigate(['./Medicine-Details'],{queryParams:{cateid:cateid,medid:medid}});
  }
  cart(med){
    localStorage.setItem('cart',JSON.stringify(med));
   this.router.navigate(['./User/Add-To-Cart']);
  }
}
