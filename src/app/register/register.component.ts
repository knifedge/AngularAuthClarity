import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder, Validators} from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  submitted = false;

  constructor(private authService : AuthService , private fb : FormBuilder){ }

  onSubmit() {
    var email = this.registerForm.value.email;
    var password = this.registerForm.value.password;
    this.authService.loginUser(email,password);
  }

  buildform() : void{
    this.registerForm = this.fb.group({
      email : ['',[Validators.required,Validators.maxLength(24),Validators.minLength(6)]],
      password : ['',Validators.required],
      about : ['',Validators.required]
    })

    this.registerForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    
    this.onValueChanged();
  }

  onValueChanged(data?:any){
    if(!this.registerForm) {return}
    const form = this.registerForm;
    
    for(const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
    }
  }
}
formErrors = {
    'email': '',
    'password': ''
  };
validationMessages = {
    'email': {
      'required':      'email is required.',
      'minlength':     'email must be at least 4 characters long.',
      'maxlength':     'email cannot be more than 24 characters long.'
    },
    'password': {
      'required': 'password is required.'
    }
  };
  ngOnInit() {
   this.buildform();
  }

}
