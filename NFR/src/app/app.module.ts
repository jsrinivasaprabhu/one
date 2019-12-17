import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { ApplicationsService } from "./applications.service";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { CreateNewAppComponent } from './create-new-app/create-new-app.component';
import { ErrorComponent } from './error/error.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ServiceMapsComponent } from './service-maps/service-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    CreateNewAppComponent,
    ErrorComponent,
    ApplicationsComponent,
    ServiceMapsComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    AuthService,
    ApplicationsService,
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
