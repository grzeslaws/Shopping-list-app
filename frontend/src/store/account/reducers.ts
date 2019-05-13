import { FETCH_ACCOUNT, UpdateAccountAction } from "./types";
import { User } from "src/models/userModel";

export const accountReducer = (
	state = null,
	action: UpdateAccountAction
): User | null => {
	switch (action.type) {
		case FETCH_ACCOUNT: {
			return action.payload;
		}
		default:
			return state;
	}
};
