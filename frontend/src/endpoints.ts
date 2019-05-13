const uri = process.env.REACT_APP_API_URL;

export default {
	user: `${uri}user/`,
	users: `${uri}users/`,
	account: `${uri}account/`,
	getSharingList: `${uri}get-sharing-list/`,
	acceptShoppingList: `${uri}accept-shopping-list/`,
	cancelShoppingList: `${uri}cancel-shopping-list/`,
	addToSharingList: `${uri}add-to-sharing-list/`,
	shoppingList: (uniqueId = "") =>
		`${uri}shopping-list/${uniqueId ? uniqueId + "/" : ""}`,
	searchShoppingList: (params = "") =>
		`${uri}search-shopping-list?search=${params}`,
	products: (uniqueId = "") =>
		`${uri}products/${uniqueId ? uniqueId + "/" : ""}`,
	login: `${uri}login/`,
	convertToken: (
		clientId: string,
		clientSecret: string,
		backend: string,
		token: string
	) =>
		`${uri}auth/convert-token?grant_type=convert_token&client_id=${clientId}&client_secret=${clientSecret}&backend=${backend}&token=${token}`,
	revokeToken: (clientId: string, clientSecret: string, token: string) =>
		`${uri}auth/revoke-token?client_id=${clientId}&client_secret=${clientSecret}&token=${token}`
};
