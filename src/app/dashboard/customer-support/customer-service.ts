import { Injectable } from "@angular/core";
import {
    HttpClient
} from '@angular/common/http';
import { SharedData } from '../../shared-service';

@Injectable()
export class CustomerService{
    
    constructor(private http:HttpClient,private error:SharedData){
      
    }
    support(email){     
return this.http.post("https://apis.geniecapture.com/user/help/",email).catch(this.error.errorHandler)
    }
}