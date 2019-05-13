import { http } from "../../services/http";
import { FETCH_USER, UpdateUserAction } from "./types";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { parse } from "sparkson";
import { User } from "src/models/userModel";
import { updateAuthInProgress } from "../auth/actions";

const updateUser = (payload: User | null): UpdateUserAction => {
	return {
		type: FETCH_USER,
		payload
	};
};

export const fetchUserPromise = () => {
	return (dispatch: Dispatch) => {
		dispatch(updateAuthInProgress(true));
		http(endpoints.user)
			.then((json: any) => {
				dispatch(updateUser(parse(User, json.user)));
				dispatch(updateAuthInProgress(false));
			})
			.catch(err => {
				dispatch(updateAuthInProgress(false));
			});
	};
};
