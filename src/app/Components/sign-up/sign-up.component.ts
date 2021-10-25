import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/Services/appservice.service';
import { LoginService } from 'src/app/Services/login.service';

import { UserModel } from 'src/app/shared/Models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm !: FormGroup;
  public signupObj = new UserModel();
  constructor(private fb :FormBuilder, private http : HttpClient,private router : Router, private api: LoginService) { }



  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullname:["", Validators.required],
      mobile:["",Validators.required],
      username:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required],
      usertype:["",Validators.required]
    })
  }
  signUp(){
    //   this.http.post<any>("http://localhost:3000/signupUser", this.signUpForm.value)
    //   .subscribe(res=>{
    //     alert("Signup Successfull");
    //     this.signUpForm.reset();
    //     this.router.navigate(['login'])
    //   },err=>{
    //     alert("Something went wrong");
    //   })
    // }
    this.signupObj.FullName = this.signUpForm.value.fullname;
    this.signupObj.UserName = this.signUpForm.value.username;
    this.signupObj.Password = this.signUpForm.value.password;
    this.signupObj.UserType = this.signUpForm.value.usertype;
    this.signupObj.Phone_no = this.signUpForm.value.mobile
    this.api.signUp(this.signupObj)
    .subscribe((res:any) =>{
      alert(res.message);
      this.signUpForm.reset();
      this.router.navigate(['login'])
    })
  }
}
