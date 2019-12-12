import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _authUrl = "http://localhost:3000/api/login";
  constructor(private http: HttpClient, private _router: Router) {}

  authenticateUser(user) {
  
    return this.http.post<any>(this._authUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("accountId");
    this._router.navigate(["/login"]);
  }
}
