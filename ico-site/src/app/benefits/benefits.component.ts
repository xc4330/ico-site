import { Component, OnInit } from '@angular/core';
import { BenefitsListItem } from './benefits.model';
import { Bubble } from '../shared/bubble/bubble.model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  showMore: boolean = false;
  showMoreLabel: string = "Show More";
  listitems: BenefitsListItem[];
  benefits: Bubble[] = [
    new Bubble('Platform Subscription Payment','../../assets/icons/Benefit01.png','Payment for different tiers of services','benefit'),
    new Bubble('Applications Usage Fee','../../assets/icons/Benefit02.png','Download to use wide range of applications in our app store with exclusive benefits. Download to customise or engage the application owner to customise for you','benefit'),
    new Bubble('Distributorship Licensing Fee','../../assets/icons/Benefit03.png','Financial settlement for various tiers of licensing. Resources support and sharing','benefit'),
    new Bubble('Token Swapping and Trading','../../assets/icons/Benefit04.png','Token swap among apps within the network. Traded on Cryptocurrency exchange','benefit'),
  ]

  constructor() { }

  toggleShowMore(){
    this.showMore = !this.showMore;
    this.showMoreLabel = this.showMore ? "Show Less" : "Show More";
  }

  ngOnInit() {
    this.listitems = [
      {
        label: 'Main Uses of MIT:',
        desc: ''
      },
      {
        label: 'Platform Subscription Payment',
        desc: 'Payment for different tiers of services'
      },
      {
        label: 'Applications Usage Fee',
        desc: 'Download to use wide range of applications in our app store with exclusive benefits. <br> Download to customise or engage the application owner to customise for you'
      },
      {
        label: 'Distributorship Licensing Fee',
        desc: 'Financial settlement for various tiers of licensing <br> Resources support and sharing'
      },
      {
        label: 'Token Swapping and Trading',
        desc: 'Token swap among apps within the network <br> Traded on Cryptocurrency exchange'
      }
    ]
  }

}
