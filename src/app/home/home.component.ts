import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  private user_photo:string;
  constructor(private AuthService : AuthService,private router: Router) {
   this.AuthService.user.subscribe((auth)=>{
     if(auth === null){
      this.isLoggedIn = false;
      this.router.navigate['login']
     }
     else {
      this.isLoggedIn = true;
      this.user_displayName = auth.displayName;
      this.user_email = auth.email;
      this.user_photo = auth.photoURL;
     }
   })
  }
  
  

  ngOnInit() {
  }

}
