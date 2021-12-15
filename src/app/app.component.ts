import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularSample01';
  isLoggedin:boolean = false;
  constructor() { }

  CheckAuth() {
    //TODO auth function
  
    return this.isLoggedin;
  }
}
