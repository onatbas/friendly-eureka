import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { WelcomeForm } from '../../components/welcome-screen/form'


@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})

export class RegisterFormComponent {

  constructor(
    private userService: UserService
  ){}

  @Input() password: string;
  @Input() password2: string;

  @Input() username: string;
  @Input() email: string;

  private message: string;

  @Input() form: WelcomeForm;
  
  gotoLogin(){
    this.form.onRegister = false;
  }

  onSubmit(){

    if (this.password != this.password2){
      this.message = "Passwords don't match";       
    }else if (!this.password || this.password.length < 8){
      this.message = "Minimum password length is 8";   
    }else if (this.email.length == 0){
      this.message = "Please type a valid email address";
    }else if (this.username.length == 0){
      this.message = "Please type a valid username";
    }else{
      this.message = "";      
      this.userService.register(this.email, this.password, this.username);
    }
  }

}