import { Field } from "sparkson";

export class Login {
    constructor(@Field("login") public login: string, @Field("password") public password: string) {}
}
