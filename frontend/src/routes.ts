export default {
	main: `/`,
	auth: `/auth`,
	login: `/login`,
	shoppingListTemplate: (uniqueId: string) => `/auth/shopping-list/${uniqueId}`,
	shoppingList: `/auth/shopping-list/:uniqueId`
};
