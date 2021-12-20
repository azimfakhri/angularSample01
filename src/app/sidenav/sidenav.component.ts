import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  menu:Menu[] = [
    {name:"Home",url:"home",icon:"home"}  
  ]
  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
