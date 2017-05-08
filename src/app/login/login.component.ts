import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params }   from '@angular/router';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  submitted = false;

  constructor(private authService : AuthService,private router : Router){  }
  user = {}
  
  onSubmit(form){}

  loginWithGoogle(){
    this.authService.loginWithGoogle();
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

}
