import * as React from "react";
import { WrapperInput, WrapperSharing } from "./shoppingStyled";
import { I } from "src/theme/objects/Icons";
import useOnClickOutside from "use-onclickoutside";
import { WrapperPopup, Popup } from "src/theme/objects/Popups";
import { InputComponent } from "../forms/InputComponent";
import { Button } from "src/theme/objects/Buttons";
import { Form } from "src/theme/objects/Forms";
import { addToSharingList } from "src/store/sharing/actions";
import { connect } from "react-redux";
import { I18N } from "src/internationalization";
import { AppState } from "src/store";

interface Props {
	uniqueId: string;
	i18n: I18N;
}

interface MethodProps {
	addToSharingList: (uniqueId: string, ownerEmail: string) => any;
}

const SharingComponent = (props: Props & MethodProps) => {
	const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const [emailError, setEmailError] = React.useState<string>("");
	const [togglePopup, setTogglePopup] = React.useState<boolean>(false);
	const [ownerEmail, setOwnerEmail] = React.useState<string>("");

	const popupElement = React.useRef(null);
	useOnClickOutside(popupElement, () => {
		setTogglePopup(false);
		setEmailError("");
		setOwnerEmail("");
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!EMAIL_REGEX.test(e.target.value)) {
			return setEmailError(props.i18n.messages.incorectEmail);
		} else {
			setEmailError("");
			setOwnerEmail(e.target.value);
		}
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>, uniqueId: string) => {
		e.preventDefault();
		if (emailError || !ownerEmail) {
			return;
		}

		props.addToSharingList(uniqueId, ownerEmail);
		setTogglePopup(false);
	};

	return (
		<WrapperSharing>
			<I onClick={() => setTogglePopup(true)}>share</I>
			<WrapperPopup show={togglePopup} isCenter={true}>
				<Popup ref={popupElement}>
					<WrapperInput>
						<Form
							onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
								onSubmit(e, props.uniqueId)
							}
						>
							<InputComponent
								focused={togglePopup}
								fieldType="text"
								name="ownerEmail"
								label={props.i18n.sharing.userEmail}
								onChange={onChange}
								placeholder="name@gmail.com"
								activePlaceholder={true}
								errorMessage={emailError}
							/>
							<Button small={true} variant={"success"}>
								{props.i18n.sharing.shareShoppingList}
							</Button>
						</Form>
					</WrapperInput>
				</Popup>
			</WrapperPopup>
		</WrapperSharing>
	);
};

const mapOwnPropsToProps = (
	{ i18n }: AppState,
	{ uniqueId }: Props
): Props => ({
	uniqueId,
	i18n
});

const mapDispachToProps: MethodProps = {
	addToSharingList
};

export default connect<Props, MethodProps, any>(
	mapOwnPropsToProps,
	mapDispachToProps
)(SharingComponent);
