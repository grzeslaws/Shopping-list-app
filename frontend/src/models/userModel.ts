import { Field } from "sparkson"; 

export class User {
    constructor(
        @Field("unique_id") public uniqueId: string, 
        @Field("first_name") public firstName: string,
        @Field("last_name") public lastName: string,
        @Field("username") public username: string,
        @Field("email") public email: string,
        @Field("picture", true) public picture?: string,
    ) {}
}
