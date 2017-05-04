import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


declare var Auth0Lock:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  submitted = false;

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  onSubmit(form){
    // this.auth.login(form.value.username ,form.value.password );
  }

  loginWithGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    })

  }

}
