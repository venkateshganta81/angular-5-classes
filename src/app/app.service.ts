import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

export class AppServices{

    constructor(
        private http : Http
    ){}


    register(userDetails){
       return this.http.post("http://localhost:3500/v1/user/signup",userDetails)
    }

}