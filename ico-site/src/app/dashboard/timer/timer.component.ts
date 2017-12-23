import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }
  stageTitle1: string = "PRE ICO PLATINUM";
  stageTitle2: string = "BONUS SALE";
  stageTitle3: string = "stage ends in:";

  badgeLabel1: string = "50% OFF";
  badgeLabel2: string = "5% BONUS";

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.getCountdownTime()
  }

  getCountdownTime() {
    let countDownDate = new Date("Jan 25, 2018 15:37:25").getTime();
    let x = setInterval(() => {

      // Get todays date and time
      let now = new Date().getTime();
    
      // Find the distance between now an the count down date
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // console.log(this.days,this.hours,this.minutes,this.seconds)
      // If the count down is finished, write some text 
      if (distance < 0) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        clearInterval(x);
      }
    }, 1000);
  }

}
