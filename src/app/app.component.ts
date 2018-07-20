import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title : any ="";
  dataRecieved:boolean = false;

  constructor( private sub : SubjectService ){}

  ngOnInit(){
    this.isApplicable = false;
    this.isAccessable();
    this.title = "Learning";
    
  }

  
  public isApplicable : Boolean;

  isAccessable(){
    console.log("Hello", this.isApplicable);
  }

  /* DOM Manipulation */
  
}
