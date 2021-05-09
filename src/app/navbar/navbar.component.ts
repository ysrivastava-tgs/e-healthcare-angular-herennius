import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../services/behaviour-services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  helper = new JwtHelperService();
  isexpired:boolean;
  flag:boolean;
  constructor(private auth: AuthService,private router: Router,private behavior_subject:LoginService) { 
    this.behavior_subject.login_convert.subscribe((res:any) =>{
     if(res!='')
     {
      document.getElementById('login').innerHTML = res;
      document.getElementById('login').style.pointerEvents = "none";
      document.getElementById('register').style.display = "none";
      document.getElementById('logout').style.display = "block";
      if(localStorage.getItem('role')=='User' || localStorage.getItem('role')==null){
      document.getElementById('orders').style.display = "block";
      this.flag = true;
      }
      if(localStorage.getItem('role')=='Admin'){
      document.getElementById('orders').style.display = "none";
    this.flag = false;
    }
      
     // document.getElementById('logout').style.pointerEvents = "visible";
     }
     else{
      document.getElementById('login').innerHTML = "Login";
      document.getElementById('login').style.pointerEvents = "visible";
      document.getElementById('register').style.display = "block";
      document.getElementById('orders').style.display = "none";
      document.getElementById('logout').style.display = "none";
      this.flag = true;
     // document.getElementById('logout').style.pointerEvents = "cursor";
     }
     });
  }

  ngOnInit(): void {
    // this.isLogin();
     this.isexpired = this.helper.isTokenExpired(localStorage.getItem('token'));
    if(this.isexpired)
    {
      this.behavior_subject.login_convert.next('');
      
      localStorage.clear();
  }
   // this.isLog();
  }
  logout()
  {
   this.auth.logout();
  }
  // isLog(){
  //  if(!this.isexpired)
  //  {
  //    this.auth.userdetials().subscribe(
  //      resp => {
        
        
  //      }
  //    );
  //  }
  //  else{
   
  //  }
  // }
  checker(){
    this.auth.checker().subscribe(
       
      resp => console.log(resp)
    );
  }
  addroute(){
    if(localStorage.getItem('role')=="User" || localStorage.getItem('role')==null)
    {
      this.router.navigate(['./User/Medicine-Category']);
    }
    else if(localStorage.getItem('role')=='Admin')
    {
      this.router.navigate(['./Medicine-Category']);
    }
  }
}
