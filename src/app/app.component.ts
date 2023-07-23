import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vms';
  userName = 'webwarriors';
  password = 'fall2023';
  welcome = 'Welcome to the volunteer management system!';
  
  auth(user: string, pass: string) : boolean{
      if(this.userName == user && this.password == pass){
        return true;
      } else {
        return false;
      }
  }
  
  message() : void{
    console.log("Message to the console.");
  }
}
