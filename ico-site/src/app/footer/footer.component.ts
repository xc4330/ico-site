import { Component, OnInit } from '@angular/core';
import { NavigationLink, NavigationLinks } from '../../data/navlink';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  navlinks: NavigationLink[];

  constructor() { }

  ngOnInit() {
    this.navlinks = NavigationLinks;
  }

}
