import { Observable } from 'rxjs';
import { OrderMedicine } from './../classes/order-medicine';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderMedicineService {
  private _postmedicineorderurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Order/OrderMedicine";
  private _getallmedicineorderurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Order/GetOrderList";
  private _getmedicineorderdetailsulr = "https://e-health-care-api-herennius.azurewebsites.net/api/Order/GetOrderDetails";
  constructor(private http:HttpClient) { }
  makeorder(obj:OrderMedicine):Observable<OrderMedicine>{
    return this.http.post<OrderMedicine>(this._postmedicineorderurl,obj,{headers:this.tokenheader()});
  }
  tokenheader(){
    return new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
  }
  getorderlist():Observable<OrderMedicine[]>{
    return this.http.get<OrderMedicine[]>(this._getallmedicineorderurl+"/"+localStorage.getItem('username'));
  }
  getorderdetails(oid,username):Observable<OrderMedicine>{
    return this.http.get<OrderMedicine>(this._getmedicineorderdetailsulr+"/"+oid+"/"+username);
  }
}
