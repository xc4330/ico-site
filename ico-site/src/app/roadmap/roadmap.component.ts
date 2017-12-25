import { Component, OnInit } from '@angular/core';
import { Phase } from './phase/phase.model';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { techPhases } from '../../data/roadmapPhases'

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
  providers: [NgbTabsetConfig]
})
export class RoadmapComponent implements OnInit {
  techPhases: Phase[] = techPhases;
  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
