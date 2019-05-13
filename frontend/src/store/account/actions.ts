import { http } from "../../services/http";
import { FETCH_ACCOUNT, UpdateAccountAction } from "./types";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { parse } from "sparkson";
import { User } from "src/models/userModel";
import { updateAuthInProgress } from "../auth/actions";
import { getTokenFromLocalStorage } from "src/services/storage";
import { updateSpinnerAction } from "../spinner/actions";
import { Spinner } from "../spinner/types";

const updateAccount = (payload: User | null): UpdateAccountAction => {
	return {
		type: FETCH_ACCOUNT,
		payload
	};
};

export const fetchAccountPromise = () => (dispatch: Dispatch<any>) => {
	dispatch(updateSpinnerAction(Spinner.start));
	dispatch(updateAuthInProgress(true));
	http(endpoints.account)
		.then((json: any) => {
			dispatch(updateAccount(parse(User, json)));
			dispatch(updateAuthInProgress(false));
			dispatch(updateSpinnerAction(Spinner.end));
		})
		.catch(err => {
			console.error("Error message: ", err);
			dispatch(updateSpinnerAction(Spinner.end));
			dispatch(updateAuthInProgress(false));
		});
};

export const clearAccount = () => {
	return (dispatch: Dispatch) => {
		http(
			endpoints.revokeToken(
				process.env.REACT_APP_BACKEND_CLIENT_ID!,
				process.env.REACT_APP_BACKEND_CLIENT_SECRET!,
				getTokenFromLocalStorage()!
			),
			"post",
			{}
		);
		dispatch(updateAccount(null));
	};
};
