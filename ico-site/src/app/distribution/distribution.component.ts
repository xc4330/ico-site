import { Component, OnInit } from '@angular/core';
import { tokenDist, financeDist } from '../../data/distribution-data';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})

export class DistributionComponent implements OnInit {

  constructor() {
    Object.assign(this, {tokenDist, financeDist});
    $(document).ready(function(){
      setTimeout(function(){
        var _h = $(window).height();
        var fromTop = $('.pie.container-fluid').offset().top;

        $(window).scroll(function(){
          var top = $(this).scrollTop();

          if (top + _h > fromTop){
            $('.bar-stats').addClass('display');
          }
        });
      }, 1500);
      
    });
  }
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
