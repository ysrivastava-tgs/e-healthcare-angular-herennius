import { Router } from '@angular/router';
import { OrderMedicine } from './../../classes/order-medicine';
import { OrderMedicineService } from './../../services/order-medicine.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent implements OnInit {
  order_list:OrderMedicine[];
  constructor(private order_service:OrderMedicineService,private behavior_subject:LoginService,private router:Router) { 
    this.behavior_subject.login_convert.next(localStorage.getItem('username'));
  }

  ngOnInit(): void {
    this.order_service.getorderlist().subscribe(
      resp => this.order_list = resp,
    );
  }
  details(oid)
  {
   // console.log(oid);
    this.router.navigate(['./User/Order-Details'],{queryParams:{oid:oid}});
  }
}
