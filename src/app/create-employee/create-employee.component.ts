import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app.service';
import { SubjectService } from '../subject.service';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  public name: string;
  public age: number;
  public email: string;
  public gender: string = "gender";
  public designation: string;
  public bloodgroup: string;
  public photo: string;
  public mobile: number;
  public male: string;
  public female: string;
  public employeeDetails: any;
  public createdEmployeeDetails : any;
  public EmittedMovieDetails : any;
  public dataRecieved : boolean;

  constructor(private appService: AppServices, private sub : SubjectService) { }

  ngOnInit() {
    // this.getEmployeesList();
    // this.getDetails();
  }


  getDetails(){
    this.sub.movieDetails.subscribe(
      (data : any)=>{
        console.log(data);
        this.dataRecieved = true;
        this.EmittedMovieDetails = data; 
      }
    )
  }

  createEmployee() {
    this.employeeDetails = {
      name: this.name,
      age: this.age,
      email: this.email,
      gender: this.gender,
      designation: this.designation,
      bloodGroup: this.bloodgroup,
      photo: this.photo,
      mobile: +this.mobile
    }
    this.appService.addEmployee(this.employeeDetails)
      .subscribe(
        (employee) => {
          this.createdEmployeeDetails = employee;
          alert(this.createdEmployeeDetails.message);
          this.getEmployeesList();
          
        },
        (error)=> {
          this.createdEmployeeDetails = error;
          alert(this.createdEmployeeDetails.message)
        }
      )
  }


  getEmployeesList(){
    this.appService.getEmployees()
      .subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{

        }
      )
  }

}
