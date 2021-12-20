import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  URL_API : string = environment.apiHost;
  constructor(private http: HttpClient) { }
}
