import { ShoppingList } from "src/models/ShoppingListModel";

export const FETCH_SHOPPING_LIST = "FETCH_SHOPPING_LIST";
export const FETCH_CURRENT_SHOPPING_LIST = "FETCH_CURRENT_SHOPPING_LIST";

export interface UpdateShoppingListAction {
	type: typeof FETCH_SHOPPING_LIST;
	payload: ShoppingList[];
}

export interface UpdateCurrentShoppingListAction {
	type: typeof FETCH_CURRENT_SHOPPING_LIST;
	payload: ShoppingList | null;
}
