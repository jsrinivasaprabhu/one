import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import { AccountComponent } from "./account/account.component";
import { CreateNewAppComponent } from "./create-new-app/create-new-app.component"
import { ErrorComponent } from "./error/error.component"
import { ApplicationsComponent } from "./applications/applications.component"
import { ServiceMapsComponent } from './service-maps/service-maps.component';

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
    component: ApplicationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "appmaps",
    component: ServiceMapsComponent,
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
