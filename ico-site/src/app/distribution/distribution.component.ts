import { Component, OnInit } from '@angular/core';
import { tokenDist, financeDist } from '../../data/distribution-data';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})

export class DistributionComponent implements OnInit {

  view: '';

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#005f71', '#007494', '#0096c5', '#4cdaed', '#8de6f5']
  };

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  arcWidth = .25;
  tooltipDisabled = true;

  constructor() {
    Object.assign(this, {tokenDist, financeDist});
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
