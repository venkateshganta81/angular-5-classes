import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;


  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email : new FormControl(null,[Validators.required,Validators.email]),
        password : new FormControl(null,Validators.required)
      }
    )
  }

  login(){
    if(this.loginForm.status == "INVALID"){
      alert("Please Enter Valid Credentials")
    }else{
      alert("In else")
      if(this.loginForm.value.email  == localStorage.getItem('email')  && this.loginForm.value.password == localStorage.getItem('psd') ){
        console.log("Success");
      }
    }
  }

}
