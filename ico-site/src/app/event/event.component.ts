import { Component, OnInit } from '@angular/core';
import { Stage } from './stage/stage.model';
import { stages } from '../../data/events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  stages: Stage[] = stages
  constructor() {
  	$(document).ready(function(){
  		var parent = $('.stages');
		var child = $('.stage-wrap');
		child.css('padding-bottom', (child.outerWidth() - child.innerWidth())+'px');
  	});

  }

  ngOnInit() {
  }
}
