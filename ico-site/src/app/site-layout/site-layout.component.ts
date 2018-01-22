import { Component, OnInit, Injectable  } from '@angular/core';
import { ScrollToModule, ScrollToService, ScrollToConfigOptions  } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})

@Injectable()
export class SiteLayoutComponent implements OnInit{
  title = 'app';
  constructor(private _scrollToService: ScrollToService){}
  
  public triggerScrollTo(target:string) {
    console.log(target)
    target = target.replace(/\s/g,''); 
    const config: ScrollToConfigOptions = {
      target: target,
      offset: -57,
    };
    this._scrollToService.scrollTo(config);
  }

  ngOnInit() {
  }	
}
