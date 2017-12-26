import { Phase } from '../app/roadmap/phase/phase.model';

export const techPhases: Phase[] = [
    new Phase('1','Design & MVP','Dec 2017','Develop Alpha version of Morpheus Labs BPaaS platform which is focused on the implementation of Platform Presentation Layer','past',true, false),
    new Phase('2','Deploy DevOps tooling','Q1 2018','After deploying our Alphas version, we will immediately work on our DevOps Tooling which aim to facilitate rapid development of Micro-service based Blockchain applications and rapid prototyping.','current',false,false),
    new Phase('3', 'Supporting co-creation and group development','Q2 2018','Deploy Platform Support system to further enhance coworking and group development.','future',false,false),
    new Phase('4', 'Commercialisation starts here','Q3 2018','Enable users to manage their monthly usage by pushing out  Platform Management Layer & Metering & Subscription Management','future',false,false),
    new Phase('5', 'Increasing flexibility','Q4 2018','Integrating Infrastructure Services Layer & Blockchain Middleware Layer','future',false,false),
    new Phase('6','Interoperability between Blockchains','2019','','future',false,false),
    new Phase('7','','Future','','future',false,true)
  ]

  export const bizPhases: Phase[] = [
    new Phase('1','','Q3 2016','Idea and founder been handpicked by SGInnovate (a Government initiative)','past', true, false),
    new Phase('2','','June 2017','Founding advisory team joined in August. Received and in discuss with Global names on distributorship and strategic partnership. Top 5 (out of global 22 bidders) in Smart Dubai Government ','past', false, false),
    new Phase('3','','Oct 2017','Received initial Seed investment. Completed Whitepaper & soft marketing launch. Early bird token sales in December. Government Polytechnic in Singapore in discussion of a 5-campus implementation of our solution and co create a curriculum','past', false, false),
    new Phase('4','','Feb 2018 (Southeast Asia)','Launch Official token sales. Official partnership campaign for Southeast Asia Region','current', false, false),
    new Phase('5','','June 2018','Official partnership campaign for Rest of Asia and UAE Region. Team capabilities enhancement - recruitment for key functions of technology development and business development. Launch Blockchain Lab initiative across Southeast Asia in all established innovation labs, accelerators, co working space, colleges and Universities.','future', false, false),
    new Phase('6','','Future ','Launch Blockchain Lab initiative across rest of Asia and UAE. Sales activities launch in rest of Asia and UAE','future', false, true),
  ]