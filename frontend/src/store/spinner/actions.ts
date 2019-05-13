import { UPDATE_SPINNER, UpdateSpinnerAction, Spinner } from "./types";

export const updateSpinnerAction = (payload: Spinner): UpdateSpinnerAction => {
	return {
		type: UPDATE_SPINNER,
		payload
	};
};
