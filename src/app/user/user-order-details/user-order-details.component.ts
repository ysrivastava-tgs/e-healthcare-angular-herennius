import { ActivatedRoute } from '@angular/router';
import { OrderMedicineService } from './../../services/order-medicine.service';
import { AuthService } from './../../services/auth.service';
import { Register } from './../../classes/register';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/behaviour-services/login.service';
import { OrderMedicine } from 'src/app/classes/order-medicine';
import { Medicine } from 'src/app/classes/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.css']
})
export class UserOrderDetailsComponent implements OnInit {
  userdetails:Register;
  order_details:OrderMedicine;
  product_details:Medicine;
  constructor(private behavior_subject:LoginService,private auth:AuthService,private order_service:OrderMedicineService,private route:ActivatedRoute,private med_service:MedicineService) { 
    this.behavior_subject.login_convert.next(localStorage.getItem('username'));
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => 
      {
        this.getordermedicinedetails(params.get('oid'));
        this.getUserDetails();
   
      }
    );
    
  }
  getUserDetails(){
    this.auth.userdetials().subscribe(
      resp => this.userdetails = resp
    )
  }
  getordermedicinedetails(oid){
    this.order_service.getorderdetails(oid,localStorage.getItem('username')).subscribe(
      resp => {this.order_details = resp;
        this.getmedicinedetails();}
    );
  }
  getmedicinedetails(){
    this.med_service.getMedDetails('xyz',this.order_details["pid"]).subscribe(
      resp => {
        this.product_details = resp ;
      //  console.log(resp);
      }
    )
  }
}
