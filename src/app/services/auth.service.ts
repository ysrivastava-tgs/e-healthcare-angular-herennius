import { Router } from '@angular/router';
import { Login } from './../classes/login';
import { Register } from './../classes/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './behaviour-services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _regurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Account/Register";
  private _loginurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Account/Login";
  private _logouturl = "https://e-health-care-api-herennius.azurewebsites.net/api/Account/Logout";
  private _isloginurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Account/IsLogin";
  private _checker = "https://e-health-care-api-herennius.azurewebsites.net/api/MedicineCategories/Checker";
  constructor(private http: HttpClient,private router: Router,private behvoir_subject:LoginService) { }

  regsiterUser(User:Register):Observable<Register>{
    let obj = new Register();
    obj.Name = User.Name;
    obj.Email = User.Email;
    obj.Password = User.Password;
    obj.ConfirmPassword = User.ConfirmPassword;
    obj.Address = User.Address;
    obj.Phone = User.Phone;
    //console.log(obj);
    return this.http.post<Register>(this._regurl,obj);
  }
  loginuser(User:Login):Observable<any>{
    let obj2 = new Login();
    obj2.UserName = User.UserName;
    obj2.Password = User.Password;
    console.log('auth',obj2);
    return this.http.post(this._loginurl,obj2);
  }
  logout(){
    localStorage.clear();
    this.behvoir_subject.login_convert.next("");
    this.router.navigate(["./"]);
  }
  userdetials():Observable<Register | any>{
    return this.http.get<Register | any>(this._isloginurl+"/"+localStorage.getItem('username'),{headers: this.tokenheader()});
  }
  checker():Observable<any>{
    return this.http.get(this._checker,{headers: this.tokenheader()});
  }
  tokenheader(){
    return new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
  }
}
