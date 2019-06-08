import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
userName: string = "Enter Your Username Here";

onClick()
{
  this.userName = ''; //clears the input box
}
  constructor() { }

  ngOnInit() {
  }

}
