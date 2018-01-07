import { Phase } from '../app/roadmap/phase/phase.model';

export const techPhases: Phase[] = [
    new Phase('0','Design And Version Alpha','Q3 2017','Develop Alpha version of Morpheus Labs BPaaS platform which is focused on the implementation of Platform Presentation Layer.','past',true, false),
    new Phase('1','Deploy DevOps Tools','Jan 2018','MVP with user interface (UI) and technology enhancements based on feedback from usage of Version Alpha. Deploy basic DevOps tooling, which aims to facilitate rapid development of blockchain applications and rapid prototyping.','current',false,false),
    new Phase('2', 'Co-creation And Group Development','April 2018','Enhancements of DevOps tooling to support co-working and group development. We will enable microservice–based blockchain application development and allow exposure of the application services as APIs. Multichain is supported in this phase.','future',false,false),
    new Phase('3', 'Commercialisation Phase','Q3 2018','Enable users to manage their monthly usage of the platform, hence permitting the commercialisation of our service.','future',false,false),
    new Phase('4', 'User Experience Enhancement.','Q4 2018','Building a new set of capabilities to empower and encourage our users to try different blockchains and find the most suitable for their product by evaluating different features of different blockchains using our platform.','future',false,false),
    new Phase('5','Interoperability Between Blockchains','Future, 2019','','future',false,true),
  ]

  export const bizPhases: Phase[] = [
    new Phase('1','','Q3 2016','Idea and founder been handpicked by SGInnovate (Singpaore government initiative).','past', true, false),
    new Phase('2','','June 2017','Founding advisory team joined in August. Received and in discuss with global names on distributorship and strategic partnership. Top 5 (out of global 22 bidders) in Smart Dubai Government.','past', false, false),
    new Phase('3','','Oct 2017','Received initial Seed investment. Signed MoU on smart nation projects in middle east region and more in finalising stage. Completed Whitepaper, soft marketing launch & Pre-ICO sales in December. Government Polytechnic in Singapore in discussion of a 5-campus implementation of our solution and co-create curriculum.','current', false, false),
    new Phase('4','','Feb 2018 (Southeast Asia)','Launch token pre-sales. Official partnership campaign for Southeast Asia Region.','future', false, false),
    new Phase('5','','June 2018','Official partnership campaign for Rest of Asia and UAE Region. Launch Blockchain Lab initiative across Southeast Asia in all established innovation labs, accelerators, co-working space, colleges and Universities.','future', false, false),
    new Phase('6','','Future ','Launch blockchain lab across rest of Asia and UAE in innovation labs, accelerators, co-working spaces, college and universities. Sales activities launch in rest of Asia and UAE.','future', false, true),
  ]