import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //A public variable available for interpolation
  title:string = 'NASA APOD';

  //A private variable not available for interpolation
  private temp:string;;

  //A public method accessible from the HTML file
  setTemp(val): void{
    this.temp = val;
  }

  //A private method not accessible from the HTML file
  private process(): boolean{
    let x:boolean=false;
    if(this.temp == 'sunshine'){
      x=true;
    }
    return x;
  }
}