import * as React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import routes from "src/routes";
import { User } from "src/models/userModel";
import { connect } from "react-redux";
import { AppState } from "src/store";
import { fetchAccountPromise } from 'src/store/account/actions';

export interface Props extends RouteProps {
	account: User | null;
	authInProgress: boolean;
}

export interface MethodProps {
	fetchAccountPromise: () => any;
}

const AuthComponent = (props: Props & MethodProps) => {
	React.useEffect(() => {
		props.fetchAccountPromise();
	}, []);

	const { account, component: Component, authInProgress } = props;

	if (authInProgress) {
		return null;
	}

	const isAuth: boolean = !!account;

	// tslint:disable-next-line: no-shadowed-variable
	const renderComponent = (Component: any, isAuth: boolean) =>
		isAuth ? (
			<Component {...props} />
		) : (
			<Redirect to={routes.login} />
		);

	return <Route render={() => renderComponent(Component, isAuth)} />;
};

const mapStateToProps = (
	{ account, authInProgress }: AppState,
	routeProps: RouteProps
): Props => ({
	account,
	authInProgress,
	...routeProps
});

const mapDispatchToProps: MethodProps = {
	fetchAccountPromise
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{ pure: false }
)(AuthComponent);
