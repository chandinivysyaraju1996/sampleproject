import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'; 
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
username:string;
password:string
  constructor(private formBuilder: FormBuilder,private router: Router, private actRoute: ActivatedRoute,private commonService:CommonService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{2,15}$/)]],
      pasword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/)]],
  });

  }


 async  loginUser(){
this.username=this.loginForm.value.user;
this.password=this.loginForm.value.pasword;
var params={
  username:this.username,
password:this.password
}
console.log(params);
try{

const res=await this.commonService.login(params);
console.log(res['access_token']);
var token=res['access_token']
if(res['access_token']){
  try{

  const response=await this.commonService.auth(token);
  console.log(JSON.stringify(response));
if(response){
  localStorage.setItem('username',response['username']);
  localStorage.setItem('firstname',response['first_name']);
  localStorage.setItem('lastname',response['last_name']);
  localStorage.setItem('email',response['email']);
    this.router.navigateByUrl('/dashboard');
  }
}
catch(error){
  alert(error['reason'])
  console.log(error['reason']);
}
}
}
catch(error){
  alert(error['reason']);
  console.log(error['reason']);

}
  }

}

