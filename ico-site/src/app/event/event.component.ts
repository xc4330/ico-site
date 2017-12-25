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
  constructor() { }

  ngOnInit() {
  }

}
