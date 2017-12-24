import { Component, OnInit } from '@angular/core';
import { Phase } from './phase/phase.model';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
  providers: [NgbTabsetConfig]
})
export class RoadmapComponent implements OnInit {
  techPhases: Phase[] = [
    new Phase('0','Design & MVP','Dec 2017','Develop Alpha version of Morpheus Labs BPaaS platform which is focused on the implementation of Platform Presentation Layer','past',true, false),
    new Phase('1','Deploy DevOps tooling','Q1 2018','After deploying our Alphas version, we will immediately work on our DevOps Tooling which aim to facilitate rapid development of Micro-service based Blockchain applications and rapid prototyping.','current',false,false),
    new Phase('2', 'Supporting co-creation and group development','Q2 2018','Deploy Platform Support system to further enhance coworking and group development.','future',false,false),
    new Phase('3', 'Commercialisation starts here','Q3 2018','Enable users to manage their monthly usage by pushing out  Platform Management Layer & Metering & Subscription Management','future',false,false),
    new Phase('4', 'Increasing flexibility','Q4 2018','Integrating Infrastructure Services Layer & Blockchain Middleware Layer','future',false,false),
    new Phase('5','Interoperability between Blockchains','2019','','future',false,false),
    new Phase('','Future','2019','','future',false,true)
  ]
  constructor(config: NgbTabsetConfig) {
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
