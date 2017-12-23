import { Component, OnInit, Input } from '@angular/core';
import { Stage } from './stage.model';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  @Input('stage') currentStage: Stage
  constructor() { }

  ngOnInit() {
  }

}
