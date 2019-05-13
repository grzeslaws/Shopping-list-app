import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "src/store";
import { Wrapper } from "src/theme/objects/Wrappers";
import { ShoppingList } from "src/models/ShoppingListModel";
import {
	fetchShoppingList,
	deleteShoppingList,
	addNewShoppingList
} from "src/store/shopping-list/actions";
import { ShoppingListComponent } from "./ShoppingListComponent";
import { AddNewList } from "./shoppingStyled";
import routes from "src/routes";
import { RouterProps } from "react-router";
import { withRouter } from "react-router-dom";
import SearchShoppingComponent from "./SearchShoppingComponent";
import { addToSharingList } from "src/store/sharing/actions";
import { bgColors } from "src/theme/settings/settings-project";
import { I18N } from "src/internationalization";

interface Props {
	shoppingList: ShoppingList[];
	currentShoppingList: ShoppingList | null;
	i18n: I18N;
}

interface MethodProps {
	fetchShoppingList: () => any;
	deleteShoppingList: (uniqueId: string) => any;
	addToSharingList: (uniqueId: string, ownerEmail: string) => any;
	addNewShoppingList: (
		cb: (uniqueId: string) => void,
		randomColor: string
	) => any;
}

const ShoppingComponent: React.SFC<
	Props & MethodProps & RouterProps
> = props => {
	React.useEffect(() => {
		props.fetchShoppingList();
	}, []);

	const redirectToCurrentList = (uniqueId: string) => {
		props.history.push(routes.shoppingListTemplate(uniqueId));
	};

	const randomColor = () => {
		const randomNumber = Math.floor(Math.random() * 9);
		const randomBgColor = Object.keys(bgColors)[randomNumber];
		return bgColors[randomBgColor][0];
	};

	return (
		<Wrapper>
			<SearchShoppingComponent />
			<ShoppingListComponent
				shoppingList={props.shoppingList}
				removeList={props.deleteShoppingList}
				addToSharingList={props.addToSharingList}
				i18n={props.i18n}
			/>
			<AddNewList
				onClick={() =>
					props.addNewShoppingList(redirectToCurrentList, randomColor())
				}
			/>
		</Wrapper>
	);
};

const mapStateToProps = ({
	shoppingList,
	currentShoppingList,
	i18n
}: AppState): Props => ({
	shoppingList,
	currentShoppingList,
	i18n
});

const mapDispachToProps: MethodProps = {
	fetchShoppingList,
	deleteShoppingList,
	addNewShoppingList,
	addToSharingList
};

// const MemoShoppingComponent = React.memo<Props & MethodProps>(
// 	ShoppingComponent,
// 	(prevProps: Readonly<Props>, nextProps: Readonly<Props>) => {
// 		return false;
// 	}
// );

export default withRouter(
	connect<Props, any, any>(
		mapStateToProps,
		mapDispachToProps
	)(ShoppingComponent)
);
