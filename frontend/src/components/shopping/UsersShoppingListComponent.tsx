import * as React from "react";

interface Props {
	users: string[];
}

export const UsersShoppingListComponent = ({ users }: Props) => {
	const renderUsers = (): JSX.Element[] | null => {
		return users
			? users.map(u => <span key={Math.random()}>{u + ", "}</span>)
			: null;
	};
	return <>{renderUsers()}</>;
};
