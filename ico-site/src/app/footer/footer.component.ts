import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationLink, NavigationLinks } from '../../data/navlink';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  navlinks: NavigationLink[];
  @Output() navClickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.navlinks = NavigationLinks;
  }

  onLinkClicked(label:string){
    this.navClickEvent.emit(label)
  }

}
