import { FETCH_SHARING_LIST, UpdateSharingListAction } from "./types";
import { SharingList } from 'src/models/SharingListModel';

export const sharingListReducer = (
	state = null,
	action: UpdateSharingListAction
): SharingList | null => {
	switch (action.type) {
		case FETCH_SHARING_LIST: {
			return action.payload;
		}
		default:
			return state;
	}
};
