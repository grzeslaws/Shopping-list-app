export const UPDATE_SPINNER = "UPDATE_SPINNER";

export enum Spinner {
	start = -1,
	end = 1
}

export interface UpdateSpinnerAction {
	type: typeof UPDATE_SPINNER;
	payload: Spinner;
}
