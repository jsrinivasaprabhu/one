import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MonitorsComponent } from "./monitors/monitors.component";
import { StatusComponent } from "./status/status.component";
import { UptimeComponent } from "./uptime/uptime.component";
import { AuthGuard } from "./auth.guard";
import { AccountComponent } from "./account/account.component";
import { CreateNewAppComponent } from "./create-new-app/create-new-app.component"
import { ErrorComponent } from "./error/error.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "accounts/:accountId/applications",
    component: MonitorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "appmaps",
    component: StatusComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "uptime",
    component: UptimeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "accounts/:accountId/applications/:applicationId",
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "accounts/:accountId/createnewapp",
    component: CreateNewAppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "error/:status",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
