import { Medicine } from './../../classes/medicine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medlist: Medicine[];
  constructor(private route: ActivatedRoute,private med_service: MedicineService,private router: Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('username')!=null){
      this.behavior_subject.login_convert.next(localStorage.getItem('username'));
    }
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
          this.med_service.getAllMedicine(params.get('medicine_id')).subscribe(
            resp => {
              this.medlist = resp
            }
          )
      }
    );
  }
add(){
  this.router.navigate(['./Add-Medicine']);
}
getDetails(cateid,medid){
  this.router.navigate(['./Medicine-Details'],{queryParams:{cateid:cateid,medid:medid}});
}
editDetails(cateid,medid){
  this.router.navigate(['./Edit-Medicine'],{queryParams:{cateid:cateid,medid:medid}});
}
}
