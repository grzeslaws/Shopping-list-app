import * as React from "react";
import { ShoppingList } from "src/models/ShoppingListModel";
import {
	ShoppingListBox,
	LinkTitle,
	WrapperNameRemove,
	WrapperShortProducts,
	ProductShort,
	WrapperShare
} from "./shoppingStyled";
import { RouteProps } from "react-router-dom";
import routes from "src/routes";
import { DateComponent } from "./DateComponent";
import { Product } from "src/models/ProductModel";
import { I } from "src/theme/objects/Icons";
import SharingComponent from "./SharingComponent";
import { I18N } from 'src/internationalization';

interface Props {
	shoppingList: ShoppingList[];
	removeList: (uniqueId: string) => any;
	addToSharingList: (uniqueId: string, ownerEmail: string) => any;
	i18n: I18N;
}

export const ShoppingListComponent = (props: Props & RouteProps) => {
	const renderProducts = (products: Product[]) => {
		return products.map(p => {
			return (
				<ProductShort
					checked={p.checked ? p.checked : false}
					key={Math.random()}
				>
					{p.name}
				</ProductShort>
			);
		});
	};

	const renderShoppingList = () => {
		return props.shoppingList.map((sl, i) => (
			<ShoppingListBox color={sl.color} key={sl.uniqueId}>
				<I onClick={() => props.removeList(sl.uniqueId)} top={10} right={10}>
					delete
				</I>
				<WrapperShare>
					<SharingComponent uniqueId={sl.uniqueId} />
				</WrapperShare>
				<DateComponent date={sl.createdAt} users={sl.users} />
				<WrapperNameRemove>
					<LinkTitle to={routes.shoppingListTemplate(sl.uniqueId)}>
						{sl.name ? sl.name : props.i18n.forms.changeListTitle}
					</LinkTitle>
				</WrapperNameRemove>
				<WrapperShortProducts>
					{renderProducts(sl.products)}
				</WrapperShortProducts>
			</ShoppingListBox>
		));
	};

	return <>{renderShoppingList()}</>;
};
