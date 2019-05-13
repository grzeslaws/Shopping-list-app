import * as React from "react";
import { connect } from "react-redux";
import { searchShoppingList } from "src/store/shopping-list/actions";
import { InputComponent } from "../forms/InputComponent";
import { I18N } from "src/internationalization";
import { AppState } from "src/store";

interface MethodProps {
	searchShoppingList: (params: string) => any;
}

interface Props {
	i18n: I18N;
}

const SearchShoppingComponent = (props: MethodProps & Props) => {
	const handleOnCHangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.searchShoppingList(e.target.value);
	};

	return (
		<>
			<InputComponent
				name="searchShoppingList"
				label={null}
				fieldType="text"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleOnCHangeInput(e)
				}
				placeholder={props.i18n.searchShopping.placeholder}
				activePlaceholder={true}
				marginBottom={15}
			/>
		</>
	);
};

const mapDispachToProps: MethodProps = {
	searchShoppingList
};

const mapStateToProps = ({ i18n }: AppState): Props => ({
	i18n
});

export default connect<Props, any, any>(
	mapStateToProps,
	mapDispachToProps
)(SearchShoppingComponent);
