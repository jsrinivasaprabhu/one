import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-app',
  templateUrl: './create-new-app.component.html',
  styleUrls: ['./create-new-app.component.css']
})
export class CreateNewAppComponent implements OnInit {
  userSignInData = {};
  errorText = "";
  httpStatus = 0;
  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log(this.userSignInData)
  }
}
