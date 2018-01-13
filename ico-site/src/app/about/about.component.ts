import { Component, OnInit } from '@angular/core';
import * as PicCarousel from 'PicCarousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
	var parentW = $('.page').width() || $(window).width();
	var img = new Image();
	img.src = $('.poster-list').find('li').eq(0).find('img').attr('src') || '';
	$(img).ready(function(){
		var ratio = $('.page').width() / img.width;
		var num = ($(window).width() - (parentW * 0.9))/2;
		var imgHeight = Math.floor(img.height * ratio / 1.8);
		$('.poster-next-btn').css('right','-' + num + 'px');
		$('.poster-prev-btn').css('left','-' + num + 'px');
		$(".poster-main").PicCarousel({
			"width":(parentW * 0.9)  - 20,   //幻灯片的宽度
			"height":imgHeight * 0.9,   //幻灯片的高度
			"posterWidth":(parentW * 0.9) / 2,  //幻灯片第一帧的宽度
			"posterHeight":imgHeight * 0.9, //幻灯片第一张的高度
			"scale":0.9,    //记录显示比例关系
			"speed":1500,   //记录幻灯片滚动速度
			"autoPlay":/Mobile/.test(navigator.userAgent) ?  false : true,  //是否开启自动播放
			"delay":1000,   //自动播放间隔
			"verticalAlign":"top" //图片对齐位置
		});
	});
  } 

  ngOnInit() {
  }

}
