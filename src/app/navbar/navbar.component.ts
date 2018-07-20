import { Component, OnInit } from "@angular/core";
import { SubjectService } from "../subject.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {
    dataRecieved: boolean = false;
    movieDetails : any;
    constructor(private sub: SubjectService) { }

    ngOnInit() {
        this.sub.movieDetails.subscribe(
            (data: any) => {
                console.log(data);
                this.dataRecieved = true;
                this.movieDetails = data;
            }
        )
    }
}