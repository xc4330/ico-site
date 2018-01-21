import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationLink, NavigationLinks } from '../../../data/navlink';
import { Navigation } from 'selenium-webdriver';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
  }

  toggleState() { // click handler
      let bool = this.isCollapsed;
      this.isCollapsed = bool === false ? true : false; 
  }

  ngOnInit() {
    this.navlinks = NavigationLinks;
  }
  onLinkClicked(label:string){
    this.toggleState()
    this.clickEvent.emit(label)
  }
  onLanguageSelect(lang:string){
    this.translate.use(lang)
  }
}
