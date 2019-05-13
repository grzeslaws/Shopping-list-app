import { User } from 'src/models/userModel';

export const FETCH_ACCOUNT = "FETCH_ACCOUNT";

export interface UpdateAccountAction {
	type: typeof FETCH_ACCOUNT;
	payload: User | null;
}
