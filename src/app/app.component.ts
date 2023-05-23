//This is the file I am able tp put the code that launches the application. Ex. the code that gets the data from the user that's logged in or any other code required to launch
import { Component } from '@angular/core';
@Component({
  selector: 'app-root', 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages!:any[
  ];
  public labels!: any[];
  constructor() {}
}