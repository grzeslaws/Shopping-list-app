import { UPDATE_AUTH_IN_PROGRESS, UpdateAuthInProgressAction } from "./types";

export const updateAuthInProgress = (
	payload: boolean
): UpdateAuthInProgressAction => {
	return {
		type: UPDATE_AUTH_IN_PROGRESS,
		payload
	};
};
