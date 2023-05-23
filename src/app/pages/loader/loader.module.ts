import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';

//Saying this module depends on the loader page, which is where code of module page is
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule
  ],
  //After using app-folder into html, adding FolderPage under declarations will allow you to make this page appear
  declarations: [LoaderPage]
})
export class LoaderPageModule {}
