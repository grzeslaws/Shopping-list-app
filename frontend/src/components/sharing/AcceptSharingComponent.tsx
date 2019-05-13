import * as React from "react";
import { ShoppingList } from "src/models/ShoppingListModel";
import useOnClickOutside from "use-onclickoutside";
import { I } from "src/theme/objects/Icons";
import {
	SharingCount,
	Wrapper,
	ListItem,
	ListName,
	WrapperButton,
	ListDetails
} from "./acceptSharingStyled";
import { Button } from "src/theme/objects/Buttons";
import { DateComponent } from "../shopping/DateComponent";
import {
	acceptShoppingList,
	cancelShoppingList
} from "src/store/sharing/actions";
import { connect } from "react-redux";
import { WrapperPopup, Popup } from 'src/theme/objects/Popups';

interface Props {
	sharingList: ShoppingList[];
}

interface MethodProps {
	acceptShoppingList: (shoppingListUniqueId: string) => any;
	cancelShoppingList: (shoppingListUniqueId: string) => any;
}

const AcceptSharingComponent = (props: Props & MethodProps) => {
	const [togglePopup, setTogglePopup] = React.useState<boolean>(false);

	const popupElement = React.useRef(null);
	useOnClickOutside(popupElement, () => setTogglePopup(false));

	const renderSharingList = () => {
		return props.sharingList.map(sl => {
			return (
				<ListItem key={sl.uniqueId}>
					<ListDetails>
						<DateComponent date={sl.createdAt} users={sl.users} />
						<ListName>{sl.name}</ListName>
					</ListDetails>
					<WrapperButton>
						<Button
							small={true}
							variant="success"
							onClick={() => {
								props.acceptShoppingList(sl.uniqueId), setTogglePopup(false);
							}}
						>
							Accept
						</Button>
						<Button
							small={true}
							variant="error"
							marginLeft={10}
							onClick={() => {
								props.cancelShoppingList(sl.uniqueId), setTogglePopup(false);
							}}
						>
							Delete
						</Button>
					</WrapperButton>
				</ListItem>
			);
		});
	};

	const sharingCount = () => {
		return <SharingCount>{props.sharingList.length}</SharingCount>;
	};

	return (
		<Wrapper show={!!props.sharingList.length}>
			<I onClick={() => setTogglePopup(true)}>notifications{sharingCount()}</I>
			<WrapperPopup show={togglePopup}>
				<Popup ref={popupElement}>{renderSharingList()}</Popup>
			</WrapperPopup>
		</Wrapper>
	);
};

const mapDispachToProps: MethodProps = {
	acceptShoppingList,
	cancelShoppingList
};

export default connect<Props, any, any>(
	null,
	mapDispachToProps
)(AcceptSharingComponent);
