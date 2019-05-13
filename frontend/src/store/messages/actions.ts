import { ADD_MESSAGE, AddMessageAction, RemoveMessageAction, REMOVE_MESSAGE } from "./types";
import { Message } from "src/models/messageModel";

export const addMessage = (payload: Message): AddMessageAction => {
	return {
		type: ADD_MESSAGE,
		payload
	};
};

export const removeMessage = (payload: Message): RemoveMessageAction => {
	return {
		type: REMOVE_MESSAGE,
		payload
	};
};



