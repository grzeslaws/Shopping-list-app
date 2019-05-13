import { Field } from "sparkson";

export class Product {
	constructor(
		@Field("unique_id") public uniqueId: string,
		@Field("name") public name: string,
		@Field("quantity", true) public quantity?: number,
		@Field("price", true) public price?: number,
		@Field("checked", true) public checked?: boolean,
	) {}
}
