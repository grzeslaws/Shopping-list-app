import * as React from "react";
import { I } from "src/theme/objects/Icons";
import { connect } from "react-redux";
import {
	updateCurrentShoppingList,
	UpdateCurrentShoppingListType
} from "src/store/shopping-list/actions";
import { WrapperPopup, Popup } from "src/theme/objects/Popups";
import useOnClickOutside from "use-onclickoutside";
import { bgColors } from "src/theme/settings/settings-project";
import { ColorItem, WrapperColors, Headline } from "./setColorStyled";
import { AppState } from "src/store";
import { ShoppingList } from "src/models/ShoppingListModel";
import { I18N } from "src/internationalization";

interface MethodProps {
	updateCurrentShoppingList: (
		shoppingListUniqueId: string,
		args: UpdateCurrentShoppingListType
	) => any;
}

interface Props {
	currentShoppingList: ShoppingList | null;
	i18n: I18N;
}

const SetColorComponent = (props: Props & MethodProps) => {
	const [togglePopup, setTogglePopup] = React.useState<boolean>(false);

	const popupElement = React.useRef(null);
	useOnClickOutside(popupElement, () => {
		setTogglePopup(false);
	});

	const renderColors = () => {
		if (props.currentShoppingList === null) {
			return;
		}

		return Object.keys(bgColors).map(c => {
			return (
				<ColorItem
					key={c}
					currentColor={props.currentShoppingList!.color === bgColors[c][0]}
					color={bgColors[c]}
					onClick={() => {
						props.updateCurrentShoppingList(
							props.currentShoppingList!.uniqueId,
							{ color: bgColors[c][0] }
						);
						setTogglePopup(false);
					}}
				/>
			);
		});
	};

	return (
		<>
			<I onClick={() => setTogglePopup(true)}>color_lens</I>
			<WrapperPopup show={togglePopup} isCenter={true}>
				<Popup ref={popupElement}>
					<Headline>{props.i18n.setColor.healine}</Headline>
					<WrapperColors>{renderColors()}</WrapperColors>
				</Popup>
			</WrapperPopup>
		</>
	);
};

const mapStateToProps = ({ currentShoppingList, i18n }: AppState): Props => ({
	currentShoppingList,
	i18n
});

const mapDispachToProps: MethodProps = {
	updateCurrentShoppingList
};

export default connect<Props, MethodProps, any>(
	mapStateToProps,
	mapDispachToProps
)(SetColorComponent);
