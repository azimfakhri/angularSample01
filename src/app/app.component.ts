import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularSample01';
  isLoggedin:boolean = false;
  constructor(private authService: AuthService,
    private router:Router) { 
    router.events.subscribe(val => {
      this.CheckAuth();
    });

   
  }

  async CheckAuth() {
    this.isLoggedin = await this.authService.isAuthenticated();
  
    return this.isLoggedin;
  }

  SignOut(){
    this.authService.SignOut();
  }
}
