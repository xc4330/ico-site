import { Component, OnInit } from '@angular/core';
import { Bubble } from '../shared/bubble/bubble.model'

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  solutions: Bubble[] = [
    new Bubble('Try and evaluate blockchain technology','../../assets/icons/solution01.png','Multiple blockchain technologies and multiple experiments on One platform cutting the time to switch between various platforms, applications and providers.','solution'),
    new Bubble('Crowd sourceing','../../assets/icons/solution02.png','Obtain services, ideas, or tools by soliciting contributions from a wide range of partner experts and curating via crowd contribution allowing broad aggregation of innovative ideas and solutions in a relatively short period of time.','solution'),
    new Bubble('Enterprise Grade','../../assets/icons/solution03.png','Scalable, secure and robust enterprise blockchain platform for rapid prototyping and easy production deployment.','solution'),
    new Bubble('Ready to deploy App (from our app library)','../../assets/icons/solution04.png','Rapid Prototype to validate use cases atop select pre-deployed application from our ready to deploy blockchain applications. This reduces the time and costs to create a fail fast and safe environment.','solution'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
