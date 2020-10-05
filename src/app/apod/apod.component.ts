import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod:Apod;
  //1. Create date as an instance variable
  date:string;

  constructor(
    private apodService: ApodService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.getApod(params['date']);
    });
  }

  getApod(date:string): void{

    //If the date is falsy, use yestoday's date.
    // The reason being: due to different time zone,
    // today's picture might not have been available yet. Causing error.
    if(!date){
      let dateObj = new Date(); 
  
      // subtract one day from current time                           
      dateObj.setDate(dateObj.getDate() - 1);  
      date = dateObj.toISOString().slice(0,10);
    }
  
    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;
        this.date = this.randomDate(new Date(1995,5,16), new Date());
        console.log(this.apod);
      }
    );
  
  }

  //2. Create a method that returns a random date
  randomDate(start, end): string{
    let date = new Date(
      start.getTime() + Math.random() *
        (end.getTime() - start.getTime())
    );

    return new Date(date).toISOString().slice(0,10);
  }

}
