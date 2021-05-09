import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/classes/login';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/behaviour-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get("password");
  }
  
  constructor(private auth_service:AuthService,private router: Router,private behavior_subject:LoginService) { 
    if(localStorage.getItem('token')!=null)
    {
        this.router.navigateByUrl('');
    }
  }

  ngOnInit(): void {
    
  
    this.loginForm = new FormGroup({
      username : new FormControl('',[
        Validators.required,
       ]),
      
      password : new FormControl('',[Validators.required]),
    
    });
   
  }
  submit(){
    // document.getElementById('login_btn').classList.add("spinner-grow text-danger");
    document.getElementById('login_btn').innerHTML = "  <span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>Logging in";
    let json = this.loginForm.value;
    let obj = new Login();
    obj.UserName = json.username;
   obj.Password = json.password;
  // console.log('login compo',obj);
    this.auth_service.loginuser(obj).subscribe(
      resp =>{
        
        localStorage.setItem('token',resp.token);
        localStorage.setItem('username',json.username);
        localStorage.setItem('role',resp.mainrole);
        this.behavior_subject.login_convert.next(json.username);
        // window.location.reload();
        // if(resp.mainrole == 'User' || resp.mainrole == 'USER')
        // {

        // }
        // else
        // {
          
        // }
       // console.log("bsdfgdfqghdaadafsgcagdc");
        this.router.navigate(['./Home']);
      },
      err => {
        document.getElementById('error').innerHTML = "*Invalid credentials";
        document.getElementById('login_btn').innerHTML = "Login";
      }
    );
  }
}
