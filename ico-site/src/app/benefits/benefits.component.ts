import { Component, OnInit } from '@angular/core';
import { BenefitsListItem } from './benefits.model';
import { Bubble } from '../shared/bubble/bubble.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  showMore: boolean = false;
  showMoreLabel: string = "Show More";
  listitems: BenefitsListItem[];
  benefits: Bubble[] = []

  constructor(private translate: TranslateService) { }

  toggleShowMore(){
    this.showMore = !this.showMore;
    this.translate.get('BENEFIT.' + (this.showMore ? "Show Less" : "Show More")).subscribe((res: string) => {
      this.showMoreLabel = res
    });
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.benefits = []
      for(let i=1;i<=4;i++){
        let benefit = new Bubble('','','','benefit')
        benefit.iconUrl = '../../assets/icons/Benefit0'+ i +'.png'
        this.translate.get('BENEFIT.cardtitle' + i).subscribe((res: string) => {
          benefit.title = res
        });
        this.translate.get('BENEFIT.cardtext' + i).subscribe((res: string) => {
          benefit.text = res
        });
        this.benefits.push(benefit)
      }

      this.listitems = []
      for(let i=1;i<=5;i++){
        let item = new BenefitsListItem('','')
        this.translate.get('BENEFIT.listtitle' + i).subscribe((res: string) => {
          item.label = res
        });
        this.translate.get('BENEFIT.listtext' + i).subscribe((res: string) => {
          item.desc = res
        });
        this.listitems.push(item)
      }

      this.translate.get('BENEFIT.' + (this.showMore ? "Show Less" : "Show More")).subscribe((res: string) => {
        this.showMoreLabel = res
      });
    });
  }

}
