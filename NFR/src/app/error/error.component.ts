import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
status;
sta1: boolean = false;
sta: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
        if( params['status'] != null){
          this.status=params['status'];
          if(this.status=="401"){
            this.sta=true;
          }
          if(this.status=="500"){
            this.sta1=true;
          }
  }

});
  }
}
