import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
private _applicationsUrl = "http://localhost:3000/api/applications";
  constructor(private http: HttpClient) { }
    getApplications(accountId) {
    // console.log(accountId)
    return this.http.post<any>(this._applicationsUrl,accountId);
  }
}
