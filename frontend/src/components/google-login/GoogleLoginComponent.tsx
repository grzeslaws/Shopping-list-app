import * as React from "react";
import { Button } from "src/theme/objects/Buttons";
import { loadGoogleApis } from "src/services/googleApis";
import { setTokenInLocalStorage } from "src/services/storage";
import { http } from "src/services/http";
import endpoints from "src/endpoints";
import { connect } from "react-redux";
import { addMessage } from "src/store/messages/actions";
import { Message, MessageType } from "src/models/messageModel";

interface GoogleResponse {
	access_token: string;
	error: any;
}

interface Props {
	btnText: string;
	callback: () => any;
}

interface ResponseConvertToken {
	access_token: string;
	expires_in: number;
	token_type: string;
	scope: string;
	refresh_token: string;
	error: string;
	error_description: string;
	detail: string;
}

interface MethodProps {
	addMessage: (payload: Message) => any;
}

const GoogleLoginComponent = (props: Props & MethodProps) => {
	const SETTINGS = {
		client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID!,
		scope: "email profile openid",
		response_type: "id_token permission"
	};
	loadGoogleApis();

	const gapiAuth2Authorize = () => {
		(window as any).gapi.load("auth2", () => {
			return (window as any).gapi.auth2.authorize(
				SETTINGS,
				(response: GoogleResponse) => {
					if (response.error) {
						console.error("google error: ", response.error);
						return;
					}
					
					http(
						endpoints.convertToken(
							process.env.REACT_APP_BACKEND_CLIENT_ID!,
							process.env.REACT_APP_BACKEND_CLIENT_SECRET!,
							"google-oauth2",
							response.access_token
						),
						"post",
						{}
					)
						.then((r: ResponseConvertToken) => {
							setTokenInLocalStorage(r.access_token);
							props.callback();
							if (!r.access_token) {
								const message: Message = {
									message: r.error_description ? r.error_description : r.detail,
									type: MessageType.error,
									id: Math.random(),
									timeToHide: 3
								};
								props.addMessage(message);
							}
						})
						.catch(console.error);
				}
			);
		});
	};
	return <Button onClick={gapiAuth2Authorize}>{props.btnText}</Button>;
};

const mapStateToProps = ({}, { btnText, callback }: Props): Props => ({
	btnText,
	callback
});

const mapDispachToProps: MethodProps = {
	addMessage
};

export default connect<Props, any, any>(
	mapStateToProps,
	mapDispachToProps
)(GoogleLoginComponent);
