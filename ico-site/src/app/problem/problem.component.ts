import { Component, OnInit } from '@angular/core';
import { Bubble } from '../shared/bubble/bubble.model'

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  problems: Bubble[] = [
    new Bubble('Which distributed ledger technology?','../../assets/icons/ProblemStatement01.png','Enterprises have difficulties selecting which blockchain technology to use. For example, Bitcoin blockchain is more suited for transfer of currencies','problem'),
    new Bubble('What use cases?','../../assets/icons/ProblemStatement02.png','Companies have difficulties understanding the use cases that apply to their industry and knowing how to evaluate the return on investment','problem'),
    new Bubble('How to deploy and test?','../../assets/icons/ProblemStatement03.png','Piecing together the blockchain nodes, storage, cloud development environment and github requires a lot of effort. It is time-consuming and resources intensive, thus excluding most companies or startups except those with deep pockets.','problem'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
