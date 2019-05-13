import * as React from "react";
import { Wrapper, WrapperMessage } from "./MessagesStyled";
import { Message } from "src/models/messageModel";
import { connect } from "react-redux";
import { AppState } from "src/store";
import { I } from 'src/theme/objects/Icons';
import { removeMessage } from 'src/store/messages/actions';

interface Props {
	messages: Message[];
}

interface MethodProps {
	removeMessage: (message: Message) => any;
}

const MessageComponent = (props: Props & MethodProps) => {
	const MILLIS_PER_SEC = 1000;

	const renderMessage = () => {
		
		return props.messages.length > 0
			? props.messages.map((m: Message) => {
					if (m.timeToHide) {
						setTimeout(() => {
							props.removeMessage(m);
						}, m.timeToHide * MILLIS_PER_SEC);
					}
					return (
						<WrapperMessage type={m.type} key={Math.random()}>
							{m.message}
							<I color="white" right={10} onClick={() => props.removeMessage(m)}>clear</I>
						</WrapperMessage>
					);
			  })
			: null;
	};

	return (
		<Wrapper show={props.messages.length > 0}>
			{renderMessage()}
		</Wrapper>
	);
};

const mapStateToProps = ({ messages }: AppState): Props => ({
	messages
});

const mapDispachToProps: MethodProps = {
	removeMessage
};

export default connect<Props, any, any>(
	mapStateToProps,
	mapDispachToProps
)(MessageComponent);
