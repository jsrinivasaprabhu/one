import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { ApplicationsService } from "../applications.service";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications = [];
  email;
  accountId;
  constructor(private _applicationsService: ApplicationsService,
    private _router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
this.route.params.subscribe( params => {
        if( params['accountId'] != null){
          this.accountId=params['accountId'];
          // window.alert(this.accountName)
        }
  });
  this.email=sessionStorage.getItem("email")
  this._applicationsService.getApplications({accountId:this.accountId,email:this.email}).subscribe(
      res => (this.applications = res),
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
