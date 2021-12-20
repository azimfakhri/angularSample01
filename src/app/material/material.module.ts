import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/***************** Angular Material Modules *****************/
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';

const AngularMatModules = [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule
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
