import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = 'webwarriors';
  password = 'fall2023';
  welcome = 'Welcome to the volunteer management system!';
  message = '';

  auth(user: string, pass: string) : boolean{
      if(this.userName == user && this.password == pass){
        this.message = "Login successful";
        return true;
      } else {
        this.message = "Incorrect user name and/or password";
        return false;
      }
  }
  
  
}


