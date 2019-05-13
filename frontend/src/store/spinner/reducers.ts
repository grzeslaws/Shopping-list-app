import { UPDATE_SPINNER, UpdateSpinnerAction, Spinner } from "./types";

export const spinnerReducer = (
	state = 0,
	action: UpdateSpinnerAction
): Spinner => {
	switch (action.type) {
		case UPDATE_SPINNER: {
			return state + action.payload;
		}
		default:
			return state;
	}
};
