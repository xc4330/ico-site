import { Component, OnInit } from '@angular/core';
import * as PicCarousel from 'PicCarousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  	$(document).ready(function(){
		var parentW = $('.page').width() || $(window).width();
		var img = new Image();
		img.src = $('.poster-list').find('li').eq(0).find('img').attr('src') || '';
		$(img).ready(function(){
			var ratio = $('.page').width() / img.width;
			var num = ($(window).width() - (parentW * 0.9))/2;
			var imgHeight = Math.floor(img.height * ratio / 1.8);
			$('.poster-next-btn').css('right','-' + num + 'px');
			$('.poster-prev-btn').css('left','-' + num + 'px');

			$('.poster-main').PicCarousel({
				'width':(parentW * 0.8)  - 20,
				'height':imgHeight * 0.9,
				'posterWidth':(parentW * 0.9) / 2,
				'posterHeight':imgHeight * 0.9,
				'scale':0.8,
				'speed':1000,
				'autoPlay':/Mobile/.test(navigator.userAgent) ?  false : true,
				'delay':2000,
				'verticalAlign':'top'
			});

		});	  	
  	});

  } 

  ngOnInit() {
  }

}
