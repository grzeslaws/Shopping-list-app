import { FETCH_USER, UpdateUserAction } from "./types";
import { User } from "src/models/userModel";

export const userReducer = (
	state = null,
	action: UpdateUserAction
): User | null => {
	switch (action.type) {
		case FETCH_USER: {
			return action.payload;
		}
		default:
			return state;
	}
};
