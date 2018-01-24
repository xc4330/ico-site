import { Phase } from '../app/roadmap/phase/phase.model';

export const techPhases: Phase[] = [
    new Phase('0','','','','past',true, false),
    new Phase('1','','','','current',false,false),
    new Phase('2','','','','future',false,false),
    new Phase('3','','','','future',false,false),
    new Phase('4','','','','future',false,false),
    new Phase('5','','','','future',false,true),
  ]

  export const bizPhases: Phase[] = [
    new Phase('0','','','','past', true, false),
    new Phase('1','','','','past', false, false),
    new Phase('2','','','','current', false, false),
    new Phase('3','','','','future', false, false),
    new Phase('4','','','','future', false, false),
    new Phase('5','','','','future', false, true),
  ]