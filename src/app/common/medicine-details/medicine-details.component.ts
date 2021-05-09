import { Medicine } from './../../classes/medicine';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent implements OnInit {
  med_details: Medicine;
  flag:boolean = true;
  constructor(private route: ActivatedRoute,private medservice: MedicineService,private router:Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='Admin')
    {
      this.flag = false;
    }
    this.route.queryParamMap.subscribe(
      params =>{
          this.medservice.getMedDetails(params.get('cateid'),params.get('medid')).subscribe(
            resp =>{
                this.med_details = resp;
            }
          );
      }
    );
  }
  cart(med_details){
    localStorage.setItem('cart',JSON.stringify(med_details));
    this.router.navigate(['./User/Add-To-Cart']);
  }
}
