import { Message } from "src/models/messageModel";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export interface AddMessageAction {
	type: typeof ADD_MESSAGE;
	payload: Message;
}

export interface RemoveMessageAction {
	type: typeof REMOVE_MESSAGE;
	payload: Message;
}
