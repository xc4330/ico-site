import { Component, OnInit } from '@angular/core';
import { BenefitsListItem } from './benefits.model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  listitems: BenefitsListItem[];

  constructor() { }

  ngOnInit() {
    this.listitems = [
      {
        label: 'Platform Subscription Payment',
        desc: 'Payment for different tiers of services '
      },
      {
        label: 'Applications usage fee',
        desc: 'Download to use wide range of applications in our app store with exclusive benefits. <br> Download to customise or engage the application owner to customise for you'
      },
      {
        label: 'Distributorship licensing fee',
        desc: 'Financial settlement for various tiers of licensing <br> Resources support and sharing'
      },
      {
        label: 'Token Swapping and trading',
        desc: 'Token swap among apps within the network <br> Traded on Cryptocurrency exchangeg'
      }
    ]
  }

}
