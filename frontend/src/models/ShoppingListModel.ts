import { Field, ArrayField } from "sparkson";
import { Product } from "./ProductModel";

export class ShoppingList {
	constructor(
		@Field("unique_id") public uniqueId: string,
		@Field("name") public name: string,
		@Field("color") public color: string,
		@Field("created_at") public createdAt: string,
		@Field("sum") public sum: number,
		@ArrayField("products", Product) public products: Product[],
		@ArrayField("users", String) public users: string[]
	) {}
}
