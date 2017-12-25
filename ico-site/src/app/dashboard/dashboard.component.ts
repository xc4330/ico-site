import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Logs } from 'selenium-webdriver';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() navClickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onNavLinkClicked(label:string){
    this.navClickEvent.emit(label)
  }

}
