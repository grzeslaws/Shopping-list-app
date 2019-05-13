export class NewProduct {
	constructor(
		public name: string,
		public checked: boolean,
		public price = 0,
		public quantity = 0,
		public shoppingListUniqueId: string
	) {}
}
