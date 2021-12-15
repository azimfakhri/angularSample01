import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})



export class SidenavComponent implements OnInit {
  menu:Menu[] = [
    {name:"Home",url:"home"}
  ]
  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
