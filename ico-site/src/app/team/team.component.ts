import { Component, OnInit } from '@angular/core';
import { Member } from './member/member.model';
import { members, advisors } from '../../data/teams';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  members: Member[] = members
  advisors: Member[] = advisors

  constructor() { }

  ngOnInit() {
  }

}
