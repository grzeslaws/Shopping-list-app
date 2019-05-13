
import { UpdateAuthInProgressAction, UPDATE_AUTH_IN_PROGRESS } from './types';

export const authInProgressReducer = (
	state = true,
	action: UpdateAuthInProgressAction
): boolean => {
	switch (action.type) {
		case UPDATE_AUTH_IN_PROGRESS: {
			return action.payload;
		}
		default:
			return state;
	}
};
