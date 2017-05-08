import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public Auth: AngularFireAuth) { 
    this.user = Auth.authState;
  }
 
  loginUser(email,password){
   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){ console.log(error) })
  }
  
  loginWithGoogle(){
     return this.Auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
      this.Auth.auth.signOut();
  }

}
