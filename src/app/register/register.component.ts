import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms'; 
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

firstname:string;
lastname:string;
email:string;
user:String;
pasword:string;
alertmodal:string='none';
message:string='';
status:string='';
  constructor(private formBuilder: FormBuilder,private router: Router, private actRoute: ActivatedRoute,private commonService:CommonService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      firstname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{2,15}$/)]],
      lastname: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{2,15}$/)]],
      email: ['', [Validators.required, Validators.email]],

      user: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]{2,15}$/)]],
      pasword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/)]],
  });
  }


 async registerUser(){
    this.email= this.registerForm.value.email;      
    this.lastname=this.registerForm.value.lastname;
    this.firstname= this.registerForm.value.firstname;
    this.user=this.registerForm.value.user;
    this.pasword= this.registerForm.value.pasword; 
    var params={
        first_name:this.firstname,
        last_name: this.lastname,
      username:this.user,
      password:this.pasword,
      email:this.email
    }
    console.log(params);
    try{
    // const res=await this.commonService.login(params);
    const res=await this.commonService.register(params);
    console.log(res);
    if(res['id']){
      this.alertmodal='block';
      this.status="success!!";
      this.message="User Registered Successfully";
      // alert("success");
    
    }
    else{
      alert("failed");
    }
  }
  catch(error){
    alert(error['status']);
  }
  }
  closeModal(){
    this.alertmodal='none';
  }



  navigate(){
    this.router.navigateByUrl('/login');

  }
}
