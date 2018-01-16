import { Component, OnInit } from '@angular/core';
import { financeDist } from '../../data/finance-dist-data';

@Component({
  selector: 'app-finance-distribution',
  templateUrl: './finance-distribution.component.html',
  styleUrls: ['./finance-distribution.component.css']
})

export class FinanceDistComponent implements OnInit {

  view: '';

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#007494', '#0096c5', '#4cdaed', '#8de6f5']
  };

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  arcWidth = .25;
  tooltipDisabled = true;

  constructor() {
    Object.assign(this, {financeDist});
    $(document).ready(function(){
      var _h = $(window).height();
      var fromTop = $('.pie.container-fluid').offset().top;

      $(window).scroll(function(){
        var top = $(this).scrollTop();

        if (top + _h > fromTop){
          $('.bar-stats').addClass('display');
        }
      });
    });
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
