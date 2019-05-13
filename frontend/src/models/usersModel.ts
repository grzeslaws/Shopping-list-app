import { ArrayField } from "sparkson";
import { User } from "./userModel";

export class Users {
  constructor(@ArrayField("users", User) public users: User[]) {}
}
