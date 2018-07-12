import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


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

}