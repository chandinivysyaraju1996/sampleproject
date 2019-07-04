import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { RequestoptionsService } from './requestoptions.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  regUrl:string;
  loginUrl:string;
  authUrl:string;
  constructor(private http:Http, private requestOptions: RequestoptionsService) { 
    // this.regUrl=Constants.HOST_URL+'​api/users/register';
    // console.log(this.regUrl);
    this.regUrl='http://3.216.215.237:8001/api/users/register';
    this.loginUrl=Constants.HOST_URL+'api/users/login';
    this.authUrl=Constants.HOST_URL+'auth/secured';
  }
  async register(data:{}): Promise<Object>
  {          
    const options = this.requestOptions.getDappRequestOptions();

    try
    {
      const resp= await this.http.post(this.regUrl,data,options).toPromise();
      return resp.json();   
    }    
    catch(error)
    {
      var err=JSON.parse(error._body);
      // await this.handleError(err);
      throw err;
    }
  }

  async login(data:{}): Promise<Object>
  {          
    const options = this.requestOptions.getDappRequestOptions();

    try
    {
      const resp= await this.http.post(this.loginUrl,data,options).toPromise();
      return resp.json();   
    }    
    catch(error)
    {
      var err=JSON.parse(error._body);
      // await this.handleError(err);
    console.error(err['status']);

      throw err;
    }
  }
  

  async auth(authtoken): Promise<Object>
  {          
    const options = this.requestOptions.getauthRequestOptions(authtoken);

    try
    {
      const resp= await this.http.get(this.authUrl,options).toPromise();
      return resp.json();   
    }    
    catch(error)
    {
      var err=JSON.parse(error._body);
    console.error(error['status']);

      // await this.handleError(err);
      throw err;
    }
  }
  // private handleError(error: Response) {
  //   console.error(error['status']);
  //  return Observable.throw(error.json);
  // }




}
