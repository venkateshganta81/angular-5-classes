import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()

export class AuthGaurd implements CanActivate{
    canActivate (){
        if(localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }
}