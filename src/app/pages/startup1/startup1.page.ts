import { Component, OnInit } from '@angular/core';

//**
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade]);

@Component({
  selector: 'app-startup1',
  templateUrl: './startup1.page.html',
  styleUrls: ['./startup1.page.scss'],
  //**
  encapsulation: ViewEncapsulation.None,
})
export class Startup1Page implements OnInit {

  images=['../../assets/myimages/cat.jpg',
          '../../assets/myimages/moon.jpg',
          '../../assets/myimages/smile.jpg'
]

  constructor() { }

  ngOnInit() {
  }

}