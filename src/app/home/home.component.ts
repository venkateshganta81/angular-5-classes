import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public showContent : boolean = true ;

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
  }

  hideContent(){
    this.showContent = !this.showContent;
  }

  checkCondition(){
    return "hell";
  }

}
