import * as React from "react";
import NavbarComponent from "../navbar/NavbarComponent";
import { AppState } from "src/store";
import { User } from "src/models/userModel";
import { connect } from "react-redux";
import ShoppingComponent from "../shopping/ShoppingComponent";
import { Route } from "react-router-dom";
import routes from "src/routes";
import ShoppingItemComponent from "../shopping/ShoppingItemComponent";

interface Props {
	account: User | null;
}

export const ProtectedAreaComponent = (props: Props) => {
	return (
		<>
			<NavbarComponent />
			<Route exact={true} path={routes.auth} component={ShoppingComponent} />
			<Route path={routes.shoppingList} component={ShoppingItemComponent} />
		</>
	);
};

const mapStateToProps = ({ account }: AppState): Props => ({
	account
});

export default connect(
	mapStateToProps,
	null,
	null,
	{ pure: false }
)(ProtectedAreaComponent);
