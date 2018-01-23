import { Component, Input } from "@angular/core";
import { Users } from "./types/users.types";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html"
})
export class UsersComponent {
  @Input() users: Users;
}
