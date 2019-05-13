import { http } from "../../services/http";
import {
	FETCH_SHOPPING_LIST,
	UpdateShoppingListAction,
	UpdateCurrentShoppingListAction,
	FETCH_CURRENT_SHOPPING_LIST
} from "./types";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { parse, parseArray } from "sparkson";
import { ShoppingList } from "src/models/ShoppingListModel";
import { NewProduct } from "src/models/NewProductModel";
import { updateSpinnerAction } from "../spinner/actions";
import { Spinner } from "../spinner/types";

const updateShoppingListAction = (
	payload: ShoppingList[]
): UpdateShoppingListAction => {
	return {
		type: FETCH_SHOPPING_LIST,
		payload
	};
};

const updateCurrentShoppingListAction = (
	payload: ShoppingList | null
): UpdateCurrentShoppingListAction => {
	return {
		type: FETCH_CURRENT_SHOPPING_LIST,
		payload
	};
};

export const fetchShoppingList = () => {
	return (dispatch: Dispatch) => {
		dispatch(updateSpinnerAction(Spinner.start));
		http(endpoints.shoppingList())
			.then((json: any) => {
				dispatch(updateShoppingListAction(parseArray(ShoppingList, json)));
				dispatch(updateSpinnerAction(Spinner.end));
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const searchShoppingList = (params: string) => {
	return (dispatch: Dispatch) => {
		dispatch(updateSpinnerAction(Spinner.start));
		http(endpoints.searchShoppingList(params))
			.then((json: any) => {
				dispatch(updateShoppingListAction(parseArray(ShoppingList, json)));
				dispatch(updateSpinnerAction(Spinner.end));
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const clearShoppingList = () => (dispatch: Dispatch) =>
	dispatch(updateCurrentShoppingListAction(null));

export const fetchCurrentShoppingList = (uniqueId: string) => {
	return (dispatch: Dispatch) => {
		dispatch(updateSpinnerAction(Spinner.start));
		http(endpoints.shoppingList(uniqueId))
			.then((json: any) => {
				dispatch(updateCurrentShoppingListAction(parse(ShoppingList, json)));
				dispatch(updateSpinnerAction(Spinner.end));
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export interface UpdateCurrentShoppingListType {
	name?: string;
	color?: string;
}

export const updateCurrentShoppingList = (
	shoppingListUniqueId: string,
	args: UpdateCurrentShoppingListType
) => {
	return (dispatch: Dispatch) => {
		http(endpoints.shoppingList(shoppingListUniqueId), "put", args)
			.then((json: any) => {
				dispatch(updateCurrentShoppingListAction(parse(ShoppingList, json)));
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const addNewShoppingList = (
	cb: (uniqueId: string) => void,
	randomColor: string
) => {
	return (dispatch: Dispatch) => {
		http(endpoints.shoppingList(), "post", { color: randomColor })
			.then((json: any) => {
				const parsedData = parse(ShoppingList, json);
				dispatch(updateCurrentShoppingListAction(parsedData));
				cb(parsedData.uniqueId);
			})
			.catch(err => {
				console.error(err);
			});
	};
};

export const deleteShoppingList = (uniqueId: string) => {
	return (dispatch: Dispatch) => {
		return http(endpoints.shoppingList(uniqueId), "delete")
			.then(() => fetchShoppingList()(dispatch))
			.catch(err => {
				console.error(err);
			});
	};
};

export const deleteProduct = (
	productUniqueId: string,
	shoppingListUniqueId: string
) => {
	return (dispatch: Dispatch) => {
		return http(endpoints.products(productUniqueId), "delete")
			.then(() => fetchCurrentShoppingList(shoppingListUniqueId)(dispatch))
			.catch(err => {
				console.error(err);
			});
	};
};

export const addProduct = (payload: NewProduct) => {
	return (dispatch: Dispatch) => {
		return http(endpoints.products(), "post", payload)
			.then(() =>
				fetchCurrentShoppingList(payload.shoppingListUniqueId)(dispatch)
			)
			.catch(err => {
				console.error(err);
			});
	};
};

export const updateProduct = (productUniqueId: string, payload: NewProduct) => {
	return (dispatch: Dispatch) => {
		return http(endpoints.products(productUniqueId), "put", payload)
			.then(() =>
				fetchCurrentShoppingList(payload.shoppingListUniqueId)(dispatch)
			)
			.catch(err => {
				console.error(err);
			});
	};
};
