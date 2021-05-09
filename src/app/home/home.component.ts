import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/behaviour-services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private behavior_suject:LoginService) { 
    if(localStorage.getItem('username')==null)
    this.behavior_suject.login_convert.next("");
    else
    this.behavior_suject.login_convert.next(localStorage.getItem('username'));
  }

  ngOnInit(): void {
  }

}
