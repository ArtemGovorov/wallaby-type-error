import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "../routes";
import { environment } from "../environments/environment";
import { UsersModule } from "apps/app/src/app/users/users.module";

@NgModule({
  imports: [BrowserModule, UsersModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
