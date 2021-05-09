import { Medicine } from './../classes/medicine';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private _getmedicineurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Medicine/GetAllMedicine";
  private _getmeddetailsurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Medicine/GetMedicine";
  private  _postmedicineurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Medicine/AddMedicine";
  private _putmedicineurl = "https://e-health-care-api-herennius.azurewebsites.net/api/Medicine/EditMedicine";
  constructor(private http: HttpClient) { }

  getAllMedicine(cateid):Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this._getmedicineurl+"/"+cateid);
  }
  tokenheader(){
    return new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
  }
  
  getMedDetails(cateid,medid):Observable<Medicine>{
    return this.http.get<Medicine>(this._getmeddetailsurl+"/"+cateid+"/"+medid);
  }
  addMedicine(obj:Medicine):Observable<Medicine>{
    return this.http.post<Medicine>(this._postmedicineurl,obj,{headers: this.tokenheader()});
  }
  editMedicine(obj:Medicine):Observable<Medicine>{
    return this.http.put<Medicine>(this._putmedicineurl+"/"+obj.Medicine_Id,obj,{headers:this.tokenheader()});
  }
}
