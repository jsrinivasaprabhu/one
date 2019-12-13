import { Component, OnInit } from "@angular/core";
import { MonitorsService } from "../monitors.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-monitors",
  templateUrl: "./monitors.component.html",
  styleUrls: ["./monitors.component.css"]
})
export class MonitorsComponent implements OnInit {
  monitors = [];
  constructor(
    private _monitorsService: MonitorsService,
    private _router: Router
  ) {}

  ngOnInit() {


    this._monitorsService.getMonitors({accountId:sessionStorage.getItem("accountId")}).subscribe(
      res => (this.monitors = res),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );






    this._monitorsService.getMonitors(sessionStorage.getItem("accountId")).subscribe(
      res => (this.monitors = res),
      err => {
        //console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(["/login"]);
          }
        }
      }
    );

  }
}
