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
  email;
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

  // if(this.accountId ==  sessionStorage.getItem("accountId")){
    this.email=sessionStorage.getItem("email")
    this._monitorsService.getMonitors({accountId:this.accountId,email:this.email}).subscribe(
      res => (this.monitors = res),
      err => {
        //console.log(err);
        if (err instanceof HttpErrorResponse) {
          console.log(err)
          if (err.status === 401) {
            this._router.navigate(["/error/"+err.status]);
          }
        }
      }
    );
  // }
// else{
//   this._router.navigate(["/"]);
//   }
}

rout(){
  this._router.navigate(["accounts/"+this.accountId+"/createnewapp"])
}
}
