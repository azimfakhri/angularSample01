import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************** Angular Material Modules *****************/
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';



const AngularMatModules = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...AngularMatModules,
  ],
  exports: [
    ...AngularMatModules,
  ],
})
export class MaterialModule { }
