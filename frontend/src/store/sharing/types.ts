import { SharingList } from 'src/models/SharingListModel';

export const FETCH_SHARING_LIST = "FETCH_SHARING_LIST";

export interface UpdateSharingListAction {
	type: typeof FETCH_SHARING_LIST;
	payload: SharingList;
}

