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

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

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
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      this.days = days / 10 < 1? '0' + String(days) : String(days);
      this.hours = hours / 10 < 1 ? '0' + String(hours) : String(hours);
      this.minutes = minutes / 10 < 1 ? '0' + String(minutes) : String(minutes);
      this.seconds = seconds / 10 < 1 ? '0' + String(seconds) : String(seconds);
    
      // console.log(this.days,this.hours,this.minutes,this.seconds)
      // If the count down is finished, write some text 
      if (distance < 0) {
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        clearInterval(x);
      }
    }, 1000);
  }

}
