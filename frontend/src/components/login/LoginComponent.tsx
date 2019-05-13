import * as React from "react";
import { connect } from "react-redux";
import { User } from "src/models/userModel";
import { Redirect } from "react-router";
import routes from "src/routes";
import {
	WrapperLogin,
	Headline,
	LogoNavbar,
	WrapperOne,
	Img,
	TextDescription,
	Content,
	Footer
} from "./loginStyled";
import { AppState } from "src/store";
import GoogleLoginComponent from "../google-login/GoogleLoginComponent";
import { fetchAccountPromise } from "src/store/account/actions";
import { removeTokenFromLocalStorage } from "src/services/storage";
import { I18N } from "src/internationalization";
import Sc1 from "src/assets/images/sc1.png";
import Sc2 from "src/assets/images/sc2.png";
import Sc3 from "src/assets/images/sc3.png";
import Sc4 from "src/assets/images/sc4.png";

interface Props {
	account: User | null;
	i18n: I18N;
}

interface MethodProps {
	fetchAccountPromise: () => any;
}

const LoginComponent = (props: Props & MethodProps) => {
	React.useEffect(() => {
		removeTokenFromLocalStorage();
	}, []);

	const { i18n } = props;

	return (
		<WrapperLogin>
			{props.account && <Redirect to={routes.auth} />}
			<LogoNavbar>{i18n.navbar.logo}</LogoNavbar>
			<WrapperOne>
				<Headline>{i18n.navbar.title}</Headline>
				<GoogleLoginComponent
					btnText={i18n.googleLogin.signInWithGoogle}
					callback={props.fetchAccountPromise}
				/>
			</WrapperOne>
			<Content>
				<TextDescription>{i18n.loginPage.t1}</TextDescription>
				<Img src={Sc1} width={307} />
			</Content>
			<Content>
				<TextDescription>{i18n.loginPage.t2}</TextDescription>
				<Img src={Sc2} width={204} />
			</Content>
			<Content>
				<TextDescription>{i18n.loginPage.t3}</TextDescription>
				<Img src={Sc3} width={241} />
			</Content>
			<Content>
				<TextDescription>{i18n.loginPage.t4}</TextDescription>
				<Img src={Sc4} width={307} />
			</Content>
			<Footer>{i18n.loginPage.copy}</Footer>
		</WrapperLogin>
	);
};

const mapStateToProps = ({ account, i18n }: AppState): Props => ({
	account,
	i18n
});

const mapDispatchToProps: MethodProps = {
	fetchAccountPromise
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{ pure: false }
)(LoginComponent);
