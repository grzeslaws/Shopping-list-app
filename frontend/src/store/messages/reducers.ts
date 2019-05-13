import { ADD_MESSAGE, AddMessageAction, RemoveMessageAction, REMOVE_MESSAGE } from "./types";
import { Message, MessageType } from "src/models/messageModel";

export const messagesReducer = (
	state = [],
	action: AddMessageAction | RemoveMessageAction
): Message[] => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return [...state, action.payload];
		}
		case REMOVE_MESSAGE: {
			const currentMessage: Message = action.payload
			return state.filter((m: Message) => m.id !== currentMessage.id);
		}
		default:
			return state;
	}
};
