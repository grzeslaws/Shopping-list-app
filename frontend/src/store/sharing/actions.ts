import { http } from "../../services/http";
import { FETCH_SHARING_LIST, UpdateSharingListAction } from "./types";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { parse } from "sparkson";
import { SharingList } from "src/models/SharingListModel";
import { Message, MessageType } from "src/models/messageModel";
import { addMessage } from "../messages/actions";
import { fetchShoppingList } from "../shopping-list/actions";

const updateSharingListAction = (
	payload: SharingList
): UpdateSharingListAction => {
	return {
		type: FETCH_SHARING_LIST,
		payload
	};
};

export const fetchSharingList = () => {
	return (dispach: Dispatch) => {
		return http(endpoints.getSharingList, "get")
			.then(json => dispach(updateSharingListAction(parse(SharingList, json))))
			.catch(console.error);
	};
};

export const acceptShoppingList = (shoppingListUniqueId: string) => {
	return (dispach: Dispatch) => {
		return http(endpoints.acceptShoppingList, "put", {
			shopping_list_unique_id: shoppingListUniqueId
		})
			.then(() => {
				fetchSharingList()(dispach);
				fetchShoppingList()(dispach);
			})
			.catch(console.error);
	};
};

export const cancelShoppingList = (shoppingListUniqueId: string) => {
	return (dispach: Dispatch) => {
		return http(endpoints.cancelShoppingList, "put", {
			shopping_list_unique_id: shoppingListUniqueId
		})
			.then(() => fetchSharingList()(dispach))
			.catch(console.error);
	};
};

export const addToSharingList = (
	shoppingListUniqueId: string,
	ownerEmail: string
) => {
	return (dispach: Dispatch) => {
		return http(endpoints.addToSharingList, "post", {
			shopping_list_unique_id: shoppingListUniqueId,
			owner_email: ownerEmail
		})
			.then(res => {
				if (res.err) {
					const message: Message = {
						message: res.err,
						type: MessageType.error,
						id: Math.random(),
						timeToHide: 3
					};
					dispach(addMessage(message));
				} else if (res.message) {
					const message: Message = {
						message: res.message,
						type: MessageType.succces,
						id: Math.random(),
						timeToHide: 3
					};
					dispach(addMessage(message));
				}
			})
			.catch(err => console.log("err: ", err));
	};
};
