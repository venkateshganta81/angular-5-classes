import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'searchFuntionality'
})

export class FilterPipe implements PipeTransform{
    filteredData : any=[];
    transform(data , text){
        this.filteredData = [];
        console.log("data:",data,"text",text);
        if(text == undefined){
            this.filteredData = data;
        }else{
            text = text.toLowerCase();
            data.forEach(movie => {
                if(movie.name.toLowerCase().indexOf(text)>=0 || movie.genere.toLowerCase().indexOf(text)>=0){
                    this.filteredData.push(movie);
                }
            });
        }
        return this.filteredData;
    }
}