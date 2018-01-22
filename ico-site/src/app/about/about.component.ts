import { Component, OnInit } from '@angular/core';
import * as PicCarousel from 'PicCarousel';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private translate: TranslateService) {
  	$(document).ready(function(){
  		if($(window).width() <= 860){
  			var parentW =  $(window).width();
  		}else{
  			var parentW = $('.abt-carousel').width() || $(window).width();
  		}
		
		var img = new Image();
		img.src = $('.poster-list').find('li').eq(0).find('img').attr('src') || '';

		$(img).ready(function(){
			var ratio = $('.abt-carousel').width() / (img.width);
			var num = ($(window).width() - (parentW * 0.9))/2;
			var imgHeight = Math.floor(img.height * ratio / 1.8);
			$('.poster-next-btn').css('right','0px');
			$('.poster-prev-btn').css('left','0px');

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

		$('.abt-carousel').removeClass('hidden');	  	
  	});

  } 

  ngOnInit() {
  }

}
