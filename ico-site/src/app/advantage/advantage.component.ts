import { Component, OnInit } from '@angular/core';
import { Feature } from './feature/feature.model';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.css']
})
export class AdvantageComponent implements OnInit {
  features: Feature[] = [
    new Feature(1,'../../../assets/icons/Competitive01.png','Robust & Scalable','Clients will be investing in a platform which is highly scalable in the cloud solution.'),
    new Feature(2,'../../../assets/icons/Competitive02.png','Turn-Key Solution','Quickly build and validate blockchain use cases atop select pre-deployed blockchain application. This shortens the time and lowers the costs to create a fail fast and safe environment.'),
    new Feature(3,'../../../assets/icons/Competitive03.png','Trusted','Our idea and founder has been accepted into SGInnovate, Singapore Government’s hand picked startups. Staffed by the most skilled engineers and award winning team.'),
    new Feature(4,'../../../assets/icons/Competitive04.png','Cost Efficient','We stand by the quality of our products and services. We are committed to providing you with value and no unreasonable charges. Inclusion and Blockchain is our mantra.'),
    new Feature(5,'../../../assets/icons/Competitive05.png','Accessible','Our team is cross-functional and experienced in the business of blockchain with varied backgrounds'),
  ]

  constructor() {
    $(document).ready(function(){
      var _h = $(window).height();
      var circleTop = $('.circle.container-fluid').offset().top;

      $(window).scroll(function(){
        var top = $(this).scrollTop();

        if (top + _h > circleTop){
          $('.circle.container-fluid').addClass('expand');
        }
      });
    });
    
  }

  ngOnInit() {
  }

}
