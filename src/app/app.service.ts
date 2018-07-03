import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()

export class AppServices{

    constructor(
        private http : Http
    ){}


    register(userDetails){
       return this.http.post("http://localhost:3500/v1/user/signup",userDetails)
    }

    login( details ){
        let headers = new Headers;
        // headers.append(token) = localStorage.getItem('token')
        return this.http.post("http://localhost:3500/v1/user/login",details,{ headers : headers })
    }

}