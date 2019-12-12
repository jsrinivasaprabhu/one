import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
accountId;
account;
  constructor(private route: ActivatedRoute,    private _accountService: AccountService,
    private _router: Router) { }

  ngOnInit() {
     this.route.params.subscribe( params => {
        if( params['accountId'] != null){
          this.accountId=params['accountId'];
          // window.alert(this.accountName)
        }
  });


  
}
}
