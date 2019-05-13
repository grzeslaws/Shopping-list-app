export const UPDATE_AUTH_IN_PROGRESS = "UPDATE_AUTH_IN_PROGRESS";

export interface UpdateAuthInProgressAction {
	type: typeof UPDATE_AUTH_IN_PROGRESS;
	payload: boolean;
}
