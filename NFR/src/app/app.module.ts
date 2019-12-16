import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MonitorsComponent } from "./monitors/monitors.component";
import { StatusComponent } from "./status/status.component";
import { UptimeComponent } from "./uptime/uptime.component";
import { AuthService } from "./auth.service";
import { MonitorsService } from "./monitors.service";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CreateNewAppComponent } from './create-new-app/create-new-app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonitorsComponent,
    StatusComponent,
    UptimeComponent,
    HomeComponent,
    AccountComponent,
    CreateNewAppComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    AuthService,
    MonitorsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
