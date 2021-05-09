import { Register } from './../../classes/register';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get("email");
  }
  get password(){
    return this.registerForm.get("password");
  }
  get password2(){
    return this.registerForm.get("password2");
  }
  get address(){
    return this.registerForm.get("address");
  }
  get phone(){
    return this.registerForm.get("phone");
  }
  constructor(private formBuilder: FormBuilder,private auth_service:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl('',[
        Validators.required,
       ]),
      
      email : new FormControl('example@domain.com'),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      password2 : new FormControl('',[Validators.required,Validators.minLength(6)]),
      address : new FormControl(''),
      phone : new FormControl('1234567890'),
    });
  }
  submit(){
    document.getElementById('reg_btn').innerHTML = "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>Getting Registered....";
    let json = this.registerForm.value;
    let obj = new Register();
    obj.Name = json.username;
    obj.Email = json.email;
    obj.Password = json.password;
    obj.ConfirmPassword = json.password2;
    obj.Address = json.address;
    obj.Phone = json.phone;
   this.auth_service.regsiterUser(obj).subscribe(
     reponse => {
      this.router.navigate(['./Login']);
     },

     (err)=>{
       console.log(err);
       let err_obj = err.error;
       console.log(err_obj[0]);
       document.getElementById("error").innerHTML = err_obj[0]["description"];
       document.getElementById('reg_btn').innerHTML = "Register";
     }
   );
  }
   
}
