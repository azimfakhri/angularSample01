import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor( private dialog: MatDialog) {  
  
  }  

  start(message: string | undefined): MatDialogRef<LoaderComponent> {  
      
      const dialogRef = this.dialog.open(LoaderComponent,{  
          disableClose: true ,  
          data: {
            message: message == ''|| message == undefined ? "Loading..." : message
          }  
      });  
      return dialogRef;  
    };  

  stop(loader:MatDialogRef<LoaderComponent>){  
    loader.close();  
  }    
}
