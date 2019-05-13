import { User } from 'src/models/userModel';

export const FETCH_USER = "FETCH_USER";

export interface UpdateUserAction {
	type: typeof FETCH_USER;
	payload: User | null;
}
