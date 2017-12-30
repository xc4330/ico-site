import { Component, OnInit } from '@angular/core';
import { Bubble } from '../shared/bubble/bubble.model'

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  solutions: Bubble[] = [
    new Bubble('Try and evaluate blockchain technology','../../assets/icons/solution01.png','Experiment with different types of blockchains on 1 platform. Waste no time switching between platforms, applications and providers','solution'),
    new Bubble('Crowdsourcing','../../assets/icons/solution02.png','Solicit new ideas or tools from your community, experts via crowd wisdom. Aggregate innovative solutions in the shortest time possible','solution'),
    new Bubble('Enterprise Grade','../../assets/icons/solution03.png','Scalable, secure and robust enterprise blockchain platform for rapid prototyping and easy production deployment.','solution'),
    new Bubble('Ready to deploy App (from our app library)','../../assets/icons/solution04.png','Rapid Prototype to validate use cases atop select pre-deployed application from our ready to deploy blockchain applications. This reduces the time and costs to create a fail fast and safe environment.','solution'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
