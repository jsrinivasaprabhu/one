import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
//  private _accountUrl = "http://localhost:3000/api/application";
  constructor(private http: HttpClient) { }

// getApplication(){
//   return this.http.get<any>(this._accountUrl);
// }

}
