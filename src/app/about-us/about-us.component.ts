import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public movies : any;
  public subscribedObservable : any;

  constructor() { }

  ngOnInit() {
    this.movies = [{
      id : 1,
      name : "E Nagaraniki Emaindhi",
      genere : "Comedy"
    },
    {
      id:2,
      name : "chinababu",
      genere : 'Social oriented'
    },
    {
      id:3,
      name:"Rangasthalam",
      genere: 'Revenge Drama'
    }
  ]

  this.demo();
  }


  demo(){
   this.subscribedObservable = Observable.interval(1000)
      .subscribe(
        () => { console.log(new Date()) }
      )
  }

  ngOnDestroy(){
    this.subscribedObservable.unsubscribe();
  }

}
