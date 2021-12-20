import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoaderService } from '../services/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  error:boolean = false;
  constructor(private builder:FormBuilder,
    private authService : AuthService,
    private loaderService : LoaderService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.InitForm()
  }

  InitForm(){
    this.loginForm= this.builder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  DoLogin(){
    if(this.loginForm.valid){
      var loader = this.loaderService.start("");
      this.authService.Authenticate(this.loginForm.value).subscribe(data=>
        {
          this.loaderService.stop(loader);
          sessionStorage.setItem("utoken",data.token);
          this.router.navigateByUrl("/home");
        },error=>{
          this.loaderService.stop(loader);
          this.error = true;
        });
    }
  }
}
