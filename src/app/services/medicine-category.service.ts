import { Medicinecategory } from './../classes/medicinecategory';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineCategoryService {
  private _getcategoryurl = "https://e-health-care-api-herennius.azurewebsites.net/api/MedicineCategories/GetCategory";
  private  _postcategoryurl = "https://e-health-care-api-herennius.azurewebsites.net/api/MedicineCategories/AddCategory";
  constructor(private http: HttpClient) { }

  getAllMedicineCategory():Observable<Medicinecategory[]>{
    return this.http.get<Medicinecategory[]>(this._getcategoryurl);
  }
  addMedicineCategory(obj:Medicinecategory):Observable<Medicinecategory>{
    return this.http.post<Medicinecategory>(this._postcategoryurl,obj,{headers: this.tokenheader()});
  }
  tokenheader(){
    return new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem('token')});
  }
}
