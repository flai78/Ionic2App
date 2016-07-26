import {Component} from '@angular/core';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HomePage {
  
  time : Date;
  
  constructor() {
    this.time = new Date();
    setInterval(()=> this.time = new Date(), 1000);
  }
}
