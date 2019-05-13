import * as React from "react";
import {
	Wrapper,
	WrapperUser,
	Logout,
	Avatar,
	Lang,
	WrapperLanguage
} from "./navbarStyled";
import { connect } from "react-redux";
import { User } from "src/models/userModel";
import { withRouter, Link } from "react-router-dom";
import { RouterProps, RouteProps } from "react-router";
import routes from "src/routes";
import { AppState } from "src/store";
import { clearAccount } from "src/store/account/actions";
import useOnClickOutside from "use-onclickoutside";
import AcceptSharingComponent from "../sharing/AcceptSharingComponent";
import { fetchSharingList } from "src/store/sharing/actions";
import { SharingList } from "src/models/SharingListModel";
import { WrapperPopup, Popup, PopupItem } from "src/theme/objects/Popups";
import { I } from "src/theme/objects/Icons";
import { Logo } from "src/theme/objects/Logos";
import { I18N, Language } from "src/internationalization";
import { updateI18n } from 'src/store/i18n/actions';

interface Props {
	account: User | null;
	sharingList: SharingList | null;
	i18n: I18N;
	checkedLanguage: Language;
}

interface MethodProps {
	clearAccount: () => any;
	fetchSharingList: () => any;
	updateI18n: (l: Language) => any;
}

const NavbarComponent = ({
	...props
}: Props & RouterProps & RouteProps & MethodProps) => {
	React.useEffect(() => {
		props.fetchSharingList();
	}, []);

	const [togglePopup, setTogglePopup] = React.useState<boolean>(false);

	const popupElement = React.useRef(null);
	useOnClickOutside(popupElement, () => setTogglePopup(false));

	const logout = () => {
		props.clearAccount();
		props.history.push(routes.main);
	};

	const isMainPage = props.location!.pathname === routes.auth;

	const handleChangeLanguage = (l: Language) => {
		props.updateI18n(l);
		setTogglePopup(false);
	};

	const languageChecker = (): JSX.Element => (
		<WrapperLanguage>
			<Lang
				onClick={() => handleChangeLanguage(Language.pl)}
				active={Language.pl === props.checkedLanguage}
			>
				Pl
			</Lang>
			<Lang
				onClick={() => handleChangeLanguage(Language.en)}
				active={Language.en === props.checkedLanguage}
			>
				En
			</Lang>
		</WrapperLanguage>
	);

	return (
		<Wrapper>
			{!isMainPage && <I onClick={() => props.history.goBack()}>arrow_back</I>}
			<Link to={routes.auth}>
				<Logo>{props.i18n.navbar.logo}</Logo>
			</Link>
			<WrapperUser>
				<AcceptSharingComponent
					sharingList={props.sharingList ? props.sharingList.shoppingList : []}
				/>
				<Avatar
					src={props.account!.picture}
					onClick={() => setTogglePopup(true)}
				/>
				<WrapperPopup show={togglePopup}>
					<Popup ref={popupElement}>
						<PopupItem>
							{props.account!.firstName} {props.account!.lastName}
						</PopupItem>
						<PopupItem smaller={true}>{props.account!.email}</PopupItem>
						{languageChecker()}
						<Logout small={true} variant="error" onClick={() => logout()}>
							{props.i18n.navbar.logout}
						</Logout>
					</Popup>
				</WrapperPopup>
			</WrapperUser>
		</Wrapper>
	);
};

const mapStateToProps = ({
	account,
	sharingList,
	i18n,
	checkedLanguage
}: AppState): Props => ({
	account,
	sharingList,
	i18n,
	checkedLanguage
});

const mapDispachToProps: MethodProps = {
	clearAccount,
	fetchSharingList,
	updateI18n
};

export default withRouter(
	connect<Props, any, any>(
		mapStateToProps,
		mapDispachToProps
	)(NavbarComponent)
);
