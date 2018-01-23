import { Component, OnInit, Injectable, AfterViewInit  } from '@angular/core';
import { ScrollToModule, ScrollToService, ScrollToConfigOptions  } from '@nicky-lenaers/ngx-scroll-to';
import * as PicCarousel from 'PicCarousel';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})

@Injectable()
export class SiteLayoutComponent implements OnInit, AfterViewInit{
  title = 'app';
  constructor(private _scrollToService: ScrollToService){}
  
  public triggerScrollTo(target:string) {
    console.log(target)
    target = target.replace(/\s/g,''); 
    const config: ScrollToConfigOptions = {
      target: target,
      offset: -57,
    };
    this._scrollToService.scrollTo(config);
  }

  ngOnInit() {
  }	

  ngAfterViewInit() {
    if($(window).width() <= 860){
      var parentW =  $(window).width();
    }else{
      var parentW = $('.abt-carousel').width() || $(window).width();
    }
  
    var $img = $('.poster-list').find('li').eq(0).find('img');

    if($img){
        $(document).ready(function(){
          var ratio = $('.abt-carousel').width() / ($img.width());
          var num = ($(window).width() - (parentW * 0.9))/2;
          var imgHeight = Math.floor($img.height() * ratio / 1.8);
          $('.poster-next-btn').css('right','0px');
          $('.poster-prev-btn').css('left','0px');
          console.log($img.height());
          var carWidth = (parentW * 0.9)  - 20;
          var carHeight = imgHeight * 0.9;
          var pWidth = (parentW * 0.9) / 2;
          var pHeight = imgHeight * 0.9;

          $('.tablet').css('height', (carHeight*1.17414248021) + 'px').css('width', (pWidth*1.34) + 'px');

          $('.poster-main').PicCarousel({
            'width':carWidth,
            'height': carHeight,
            'posterWidth': pWidth,
            'posterHeight': pHeight,
            'scale':0.8,
            'speed':1000,
            'autoPlay':/Mobile/.test(navigator.userAgent) ?  false : true,
            'delay':2000,
            'verticalAlign':'top'
          });

        }); 
    }
    
  }
}
