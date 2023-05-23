import { Component, OnInit } from '@angular/core';

@Component({
  //This selector is used to tell if I want to use this loader in some other page, I can re-use it this way in the html.
  selector: 'app-loader',
  //templateURL informs that the html file for the page is ./loader.page.html
  templateUrl: './loader.page.html',
  //styleURLs informs that the styles file of the page is laoder.page.scss
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor() { }
  
  ngOnInit() {
    //This function is always called when the page loads for the first time, console.log("Hello") can confirm and show text in console 
  }

}
