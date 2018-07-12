import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppServices } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name : any;
  public email : any;
  public password : any;
  public mobile :Number;

  public user : any;
  public userDetails : any;

  constructor(
    private appService : AppServices,
    private router : Router
  ) { }

  ngOnInit() {
  }

  register(){
    if(!this.name){
      alert("Please Enter Name");
    }else if(!this.email){
      alert("Please Enter Email");
    }else if(!this.mobile){
      alert("Please Enter mobile");
    }else if(!this.password){
      alert("Please Enter Password");
    }else{
      this.user = {
        name : this.name ,
        email : this.email,
        phone : +this.mobile,
        password : this.password
      };

      this.appService.register(this.user)
        .subscribe(
          (response) =>{
            this.userDetails = response;
            if(this.userDetails.status){
              this.router.navigate(['/login'])
            }else{
              alert(this.userDetails.message);
            }
          }
        )
      

    }
  }

}
