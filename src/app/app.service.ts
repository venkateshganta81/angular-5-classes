import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppServices {

    constructor(
        private http: HttpClient
    ) { }

    public serverUrl = environment.serverUrl;

    register(userDetails) {
        return this.http.post(this.serverUrl+"/v1/user/signup", userDetails)
    }

    login(details) {
        return this.http.post(this.serverUrl+"/v1/user/login", details)
    }

    /* getDetails(){
        let customHeaders = new Headers;
        customHeaders.append('token', localStorage.getItem('token'));
        return this.http.post(this.serverUrl+"/v1/user/getDetails", { headers: customHeaders })
    } */

    addEmployee(employee){
    return  this.http.post("http://localhost:3500/v1/user/addEmployee",employee);
    }

    getEmployees(){
        return this.http.get("http://localhost:3500/v1/user/getEmployee").map( (res) => { return res } );
    }

}