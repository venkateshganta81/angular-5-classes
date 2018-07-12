import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public showContent : boolean = true ;
  public logo : any=[];
  public selectedLogo :any;
  public email : any  = "Hello";
  public currentDate = 0.2;

  public employees = [
    {
      name : "Suresh"
    },
    {
      name : "Vinay"
    },
    {
      name : "Praveen"
    },
    {
      name : "Gopi"
    }
  ];

  ngOnInit() {
    this.logo = ["../assets/images/logo.svg","../assets/images/al-logo12.jpg"];
    this.selectedLogo = this.logo[0];
  }

  hideContent(){
    this.showContent = !this.showContent;
  }

  callNgClass(){
    if(this.showContent){
      return "hello";
    }else{
      return "demo";
    }
  }

  dynamicWidth(){
    return {
      width : 400 + 'px',
      height : 400 + 'px',
      'background-color' : "red"
    }
  }

  changeLogos(){
    this.showContent = ! this.showContent;
    this.selectedLogo = this.showContent ? this.logo[0] : this.logo[1];
  }

}
