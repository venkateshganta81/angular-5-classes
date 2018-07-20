import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Observer } from 'rxjs/Observer';
import { SubjectService } from '../subject.service';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public movies: any;
  public subscribedObservable: any;
  observerVariable : any;
  movieData : any;

  constructor(
    private subService : SubjectService
  ) { }

  ngOnInit() {
    this.movies = [{
      id: 1,
      name: "E Nagaraniki Emaindhi",
      genere: "Comedy",
      tickets : "available"
    },
    {
      id: 2,
      name: "chinababu",
      genere: 'Social oriented',
      tickets : "sold"
    },
    {
      id: 3,
      name: "Rangasthalam",
      genere: 'Revenge Drama',
      tickets : "sold"
    }
    ]
    this.movieData = this.movies;
    /* this.demo(); */

    

    /* this.subscribedObservable = Observable.create((observer : Observer<any>)=>{
      setTimeout(
        ()=>{
          observer.next(this.movies);
        },
        5*1000
      ),
      setTimeout(
        ()=>{
          observer.next("this.movies");
        },
        6*1000
      ),
      setTimeout(
        ()=>{
          observer.next(this.movies);
        },
        8*1000
      ),
      setTimeout(
        ()=>{
          observer.next("this.movies");
        },
        10*1000
      ),
      setTimeout(
        ()=>{
          observer.error("Error");
        },
        10*1000
      ),
      setTimeout(
        ()=>{
          observer.complete();
        },
        15*1000
      )
    }
    ) */

    /* this.subscribedObservable.subscribe(
      (data : any)=>{
        console.log(data);
      },
      (error : String)=>{
        console.log(error);
      },
      ()=>{
        console.log("Completed");
      }
    ) */



  }


  subjectDemo(){
    this.subService.movieDetails.next(this.movies);
  }


  demo() {
    this.subscribedObservable = Observable.interval(15*1000)
      .subscribe(
        () => { 
          console.log(this.movieData);
          this.movies.forEach(movie => {
            if(movie.tickets == "available"){
              movie.tickets = "sold";
            }else{
              movie.tickets = "available"
            }
          });
        }
      )

      
  }


  ObserverFunction(){
    this.observerVariable = Observable.interval(20*1000)
      .subscribe(
        () =>{
          if(this.movieData[0].tickets != this.movies[0].tickets ){
            console.log("Not Equal");
            return this.movieData;
          }
        }
      )
  }
  

  ngOnDestroy() {
    // this.subscribedObservable.unsubscribe();
  }

}
