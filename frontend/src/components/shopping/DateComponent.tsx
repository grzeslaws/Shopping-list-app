import * as React from "react";
import { DateShoppingList } from "./shoppingStyled";
import { UsersShoppingListComponent } from "./UsersShoppingListComponent";
import * as moment from "moment";

interface Props {
	date: string;
	users: string[];
}

export const DateComponent = ({ date, users }: Props) => {
	return (
		<DateShoppingList>
			<UsersShoppingListComponent users={users} />
			{moment(date).format("MM.DD.YYYY, H:mm")}
		</DateShoppingList>
	);
};
