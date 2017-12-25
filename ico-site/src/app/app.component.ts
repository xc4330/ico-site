import { Component, Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';
  constructor(private _scrollToService: ScrollToService){}
  
  public triggerScrollTo(target:string) {
    console.log(target)
    target = target.replace(/\s/g,''); 
    const config: ScrollToConfigOptions = {
      target: target
    };
    this._scrollToService.scrollTo(config);
  }
}
