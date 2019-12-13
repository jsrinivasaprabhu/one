import { Component, OnInit } from "@angular/core";
import { MonitorsService } from "../monitors.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-monitors",
  templateUrl: "./monitors.component.html",
  styleUrls: ["./monitors.component.css"]
})
export class MonitorsComponent implements OnInit {
  monitors = [];
  accountId;
  constructor(
    private _monitorsService: MonitorsService,
    private _router: Router,private route: ActivatedRoute
  ) {}

  ngOnInit() {
     this.route.params.subscribe( params => {
        if( params['accountId'] != null){
          this.accountId=params['accountId'];
          // window.alert(this.accountName)
        }
  });

  if(this.accountId ==  sessionStorage.getItem("accountId")){
    this._monitorsService.getMonitors({accountId:this.accountId}).subscribe(
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
else{
  this._router.navigate(["/"]);
  }
  }
}
