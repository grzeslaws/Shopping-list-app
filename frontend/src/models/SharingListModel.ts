import { ArrayField } from "sparkson";
import { ShoppingList } from './ShoppingListModel';

export class SharingList {
	constructor(
		@ArrayField("shopping_list", ShoppingList) public shoppingList: ShoppingList[]
	) {}
}
