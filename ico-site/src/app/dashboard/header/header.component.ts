import { Component, OnInit } from '@angular/core';
import { NavigationLink, NavigationLinks } from '../../../data/navlink';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navlinks: NavigationLink[];

  constructor() { }

  ngOnInit() {
    this.navlinks = NavigationLinks;
  }

}
