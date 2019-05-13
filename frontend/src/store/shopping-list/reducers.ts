import {
	FETCH_SHOPPING_LIST,
	UpdateShoppingListAction,
	UpdateCurrentShoppingListAction,
	FETCH_CURRENT_SHOPPING_LIST
} from "./types";
import { ShoppingList } from "src/models/ShoppingListModel";

export const shoppingListReducer = (
	state = [],
	action: UpdateShoppingListAction
): ShoppingList[] => {
	switch (action.type) {
		case FETCH_SHOPPING_LIST: {
			return action.payload;
		}
		default:
			return state;
	}
};

export const currentShoppingListReducer = (
	state = null,
	action: UpdateCurrentShoppingListAction
): ShoppingList | null => {
	switch (action.type) {
		case FETCH_CURRENT_SHOPPING_LIST: {
			return action.payload;
		}
		default:
			return state;
	}
};
