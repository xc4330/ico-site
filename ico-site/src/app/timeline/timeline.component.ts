import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      function showBars(){
        var data =[
            {
              probability:60, 
              timeline:'22 JAN - 4 FEB', 
              isSale:true,
              active:true 
            },
            {
              probability:35, 
              timeline:'5 FEB - 18 FEB', 
              isSale:false,
              active:true 
            },
            {
              probability:20, 
              timeline:'19 FEB - 4 MAR', 
              isSale:false,
              active:true 
            },
            {
              probability:15, 
              timeline:'5 MAR - 18 MAR', 
              isSale:false,
              active:true 
            },
            {
              probability:0, 
              timeline:'19 MAR - 15 APR', 
              isSale:false,
              active:true 
            },
            {
              probability:'', 
              timeline:'15 APR ONWARD', 
              isSale:false,
              active:true 
            }]
          var $item = $('.statistics-item');
          $item.each(function(i){
            $item.eq(i).find('.statistics-col-bg').addClass('opacity-' + i).css('height',data[i].probability + '%');
            if (!!data[i].active) $item.eq(i).find('.statistics-col-bg').addClass("statistics-item-linght");
            if (!!data[i].isSale) {
              $item.eq(i).addClass("statistics-sale");
              setTimeout(function(){
                $item.eq(i).addClass("statistics-sale-show");
              },1000)
            }
            if (!data[i].probability) {
              if (data[i].probability === 0) $item.eq(i).find('.statistics-text').text('Bonus' + data[i].probability + '%');
              $item.eq(i).addClass("statistics-not-data");
            } else {
              $item.eq(i).find('.statistics-text').text('Bonus' + data[i].probability + '%');
            }
          });
      }

      setTimeout(function(){
        var _h = $(window).height();
        var statisticsMainTop = $('.timeline.statistics-main').offset().top;

        $(window).scroll(function(){
          var top = $(this).scrollTop();

          if(top + _h > statisticsMainTop){
            showBars();
            console.log("!");
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
