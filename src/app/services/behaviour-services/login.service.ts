import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login_convert = new Subject();
  orders_link = new Subject();
  constructor() { }
}
