import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrls: ['./user-add-to-cart.component.css']
})
export class UserAddToCartComponent implements OnInit {
  flag:boolean = false;
  med:any;
  qty:number;
  constructor(private router:Router,private behvior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null)
    {
      this.behvior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('cart')==null)
    {
      this.flag = false;
    }
    else if(localStorage.getItem('cart')!=null)
    {
      this.flag = true;
      this.med = localStorage.getItem('cart');
      this.med = JSON.parse(this.med);
    }
  }
  fun($event){
  //console.log(this.med['medicine_Price']);
  
  document.getElementById('update').innerHTML = "Rs"+" "+($event.target.value*parseInt(this.med['medicine_Price'])).toString()+"/-";
  document.getElementById('update2').innerHTML = "MRP Total Rs "+($event.target.value*parseInt(this.med['medicine_Price'])).toString();
  //console.log(this.med);
  
}
remove(){
  localStorage.removeItem('cart');
  this.ngOnInit();
}
confirm(){
  if(localStorage.getItem('username')==null)
  {
    this.router.navigate(['./Login']);
  }
  this.qty = parseInt((<HTMLInputElement>document.getElementById('value')).value);
  localStorage.setItem('qty_bought',this.qty.toString());
  this.router.navigate(['./User/Confirm-Page']);
}
}
