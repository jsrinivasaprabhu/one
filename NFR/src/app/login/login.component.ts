import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userSignInData = {};
  errorText = "";
  httpStatus = 0;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  signInUser() {
    this._auth.authenticateUser(this.userSignInData).subscribe(
      res => {
  
        localStorage.setItem("token", res.token);
        localStorage.setItem("accountId", res.accountId.accountId);
        this._router.navigate(["/accounts/"+res.accountId.accountId+"/applications"]);
      },
      err => {
        this.errorText = err.error;
        this.httpStatus = err.status;
        console.log("Error from login.comp: ", err);
      }
    );
  }
}
