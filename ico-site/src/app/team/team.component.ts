import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Member } from './member/member.model';
import { members, advisors } from '../../data/teams';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit, AfterViewInit {
  members: Member[] = members
  advisors: Member[] = advisors

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      members.forEach( (member,i) => {
        this.translate.get('TEAM.member-name' + i).subscribe((res: string) => {
          member.name = res
        });
        this.translate.get('TEAM.member-country' + i).subscribe((res: string) => {
          member.country = res
        });
        this.translate.get('TEAM.member-bg' + i).subscribe((res: string) => {
          member.desc1 = res
        });
        this.translate.get('TEAM.member-exp' + i).subscribe((res: string) => {
          member.desc2 = res
        });
      })

      advisors.forEach( (advisor,i) => {
        this.translate.get('TEAM.advisor-name' + i).subscribe((res: string) => {
          advisor.name = res
        });
        this.translate.get('TEAM.advisor-country' + i).subscribe((res: string) => {
          advisor.country = res
        });
        this.translate.get('TEAM.advisor-bg' + i).subscribe((res: string) => {
          advisor.desc1 = res
        });
        this.translate.get('TEAM.advisor-exp' + i).subscribe((res: string) => {
          advisor.desc2 = res
        });
      })
    });
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      var width = $('.photo').outerWidth();
      $('.photo').css('height', width+'px');
    });
  }

}
