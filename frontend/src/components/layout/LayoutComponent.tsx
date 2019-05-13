import * as React from "react";
import routes from "src/routes";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import SpinnerComponent from "../spinner/SpinnerComponent";
import MessageComponent from "../messages/MessageComponent";
import LoginComponent from "../login/LoginComponent";
import ProtectedAreaComponent from "../auth/ProtectedAreaComponent";
import AuthComponent from "../auth/AuthComponent";

export const LayoutComponent = () => {
	return (
		<Router>
			<React.Fragment>
				<SpinnerComponent />
				<MessageComponent />
				<Route
					exact={true}
					path={routes.main}
					render={() => <Redirect to={routes.login} />}
				/>
				<Switch>
					<Route path={routes.login} component={LoginComponent} />
					<AuthComponent
						path={routes.auth}
						component={ProtectedAreaComponent}
					/>
				</Switch>
			</React.Fragment>
		</Router>
	);
};
