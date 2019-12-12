import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MonitorsService {
  private _monitorsUrl = "http://localhost:3000/api/application";
  constructor(private http: HttpClient) {}

  getMonitors(accountId) {
    return this.http.post<any>(this._monitorsUrl,accountId);
  }
}
