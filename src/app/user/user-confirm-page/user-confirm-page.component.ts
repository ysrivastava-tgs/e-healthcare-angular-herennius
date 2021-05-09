import { OrderMedicineService } from './../../services/order-medicine.service';
import { OrderMedicine } from './../../classes/order-medicine';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from './../../classes/register';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-confirm-page',
  templateUrl: './user-confirm-page.component.html',
  styleUrls: ['./user-confirm-page.component.css']
})
export class UserConfirmPageComponent implements OnInit {
  item:any;
  qty:number;
  user_details:Register;
  orderSubmitForm:FormGroup;
  constructor(private router:Router,private auth_service: AuthService,private order_service:OrderMedicineService) { }

  ngOnInit(): void {
    this.item = localStorage.getItem('cart');
    if(this.item==null)
    {
      this.router.navigate(['./']);
    }
    else{
    this.item = JSON.parse(this.item);
    this.qty = parseInt(localStorage.getItem('qty_bought'));
    this.item['medicine_Price'] = this.qty*this.item['medicine_Price'];
  //  console.log(this.qty,this.item);
    }
    this.auth_service.userdetials().subscribe(
      resp =>{
        this.user_details = resp;
        if(this.user_details)
        {
         // console.log(resp);
          this.orderSubmitForm = new FormGroup({
            username : new FormControl(localStorage.getItem('username'),Validators.required),
            
             pid : new FormControl(this.item['medicine_Id'],Validators.required),
             quantity : new FormControl(this.qty,Validators.required),
             amount : new FormControl(this.item['medicine_Price'],Validators.required),
             createdat : new FormControl(new Date(),Validators.required),
             shippingaddress : new FormControl(resp['address'],Validators.required),
           
          });
        }
      }
    );
  }

  submit(){
    const json = this.orderSubmitForm.value;
    let obj = new OrderMedicine();
    obj.Amount = parseFloat(json.amount);
    obj.CreatedAt = json.createdat;
    obj.Pid = json.pid;
    obj.Quantity = json.quantity;
    obj.Shipping_Address = json.shippingaddress;
    obj.Username = localStorage.getItem('username');
   // console.log(obj);
    this.order_service.makeorder(obj).subscribe(
      resp =>{
        //console.log('response',resp);
        this.router.navigate(['./User/Order-List'])
      },
    );
  }

}
