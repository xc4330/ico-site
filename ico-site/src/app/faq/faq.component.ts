import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Output() navClickEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onNavLinkClicked(label:string){
    this.navClickEvent.emit(label)
  }

}