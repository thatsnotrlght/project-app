import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Startup1PageRoutingModule } from './startup1-routing.module';

import { Startup1Page } from './startup1.page';

//**
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Startup1PageRoutingModule,
    //**
    SwiperModule
  ],
  declarations: [Startup1Page]
})
export class Startup1PageModule {}

