import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passWord: string = "";
  onClick()
  {
    this.passWord = ''; //clears the input box
  }

  constructor() { }

  ngOnInit() {
  }

}
