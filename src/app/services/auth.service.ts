import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment} from 'src/environments/environment'
import { Auth } from '../model/auth';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  URL_API : string = environment.apiHost;
  constructor(private http: HttpClient,
    private jwtHelper:JwtHelperService,
    private router:Router) {
   }

  Authenticate(data:Auth): Observable<any>{
    
   return this.http.post(this.URL_API + '/auth', JSON.stringify(data), { headers });
  }

  isAuthenticated() { 
    const token = sessionStorage.getItem('utoken');
    if(token){

      if(this.jwtHelper.isTokenExpired(token)){
        return false;
      }else{
        return true;
      }
    }else{
      return false;
    }
  }

  SignOut() {
    sessionStorage.clear();   
    this.router.navigateByUrl("/login");
  }

}

