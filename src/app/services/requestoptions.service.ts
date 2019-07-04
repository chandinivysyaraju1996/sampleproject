import { Injectable } from '@angular/core';
import { Headers }  from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RequestoptionsService {

  constructor() { }


  public getDappRequestOptions(){
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',    
        'Accept':  'application/json',
        'Access-Control-Allow-Origin':'*',

// "Access-Control-Allow-Methods": "POST",
// "Access-Control-Allow-Headers": "Content-Type"
      })
    };
   
    return httpOptions;
  }


  public getauthRequestOptions(auth_token){
    const httpOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',    
        'Accept':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Authorization':'Bearer '+auth_token
// "Access-Control-Allow-Methods": "POST",
// "Access-Control-Allow-Headers": "Content-Type"
      }),
     
    };
   
    return httpOptions;
  }

}
