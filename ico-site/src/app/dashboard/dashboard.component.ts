import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stageTitle1: string = "PRE ICO PLATINUM";
  stageTitle2: string = "BONUS SALE";
  stageTitle3: string = "stage ends in:";

  badgeLabel1: string = "50% OFF";
  badgeLabel2: string = "5% BONUS";

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  constructor() { }

  ngOnInit() {
    this.getCountdownTime()
  }

  getCountdownTime() {
    let countDownDate = new Date("Jan 25, 2018 15:37:25").getTime();
    let x = setInterval(function() {

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
