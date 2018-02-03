import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationLink, NavigationLinks, BountyNavigationLinks, FaqLinks } from '../../../data/navlink';
import { Navigation } from 'selenium-webdriver';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navlinks: NavigationLink[];
  @Output() clickEvent = new EventEmitter<string>();
  isCollapsed = true;   // store state
  languages = [
    'en',
    'cn'
  ]

  constructor(private translate: TranslateService, private _router: Router) {
    this.router = _router;
  }

  toggleState() { // click handler
      let bool = this.isCollapsed;
      this.isCollapsed = bool === false ? true : false; 
  }

  ngOnInit() {
    if(this.router.url === '/faq' || this.router.url === '/FAQ'){
      this.navlinks = FaqLinks;
    }else if (this.router.url === '/bounty'){
      this.navlinks = BountyNavigationLinks;
    }else{
      this.navlinks = NavigationLinks;
    }
  }
  onLinkClicked(label:string){
    this.toggleState()
    this.clickEvent.emit(label)
  }
  onLanguageSelect(lang:string){
    this.translate.use(lang)
  }
}
