import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  subscribedDemoObesrvable :any;
  id:any;
  movies:any;
  movie : any;

  constructor(
    private route : ActivatedRoute
  ) { }

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
    this.subscribedDemoObesrvable = this.route.params.subscribe(
      (params) => {
        return this.id= params['id'];
      }
    )
    this.displayMovieDetails();
    console.log(this.id);
  }

  displayMovieDetails(){
    this.movies.forEach( movie => {
      if(movie.id==this.id){
        this.movie = movie;
      }
    });
  }  


  ngOnDestroy(){
    this.subscribedDemoObesrvable.unsubscribe();
  }


}
