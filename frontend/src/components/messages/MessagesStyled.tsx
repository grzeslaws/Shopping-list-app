import styled from "../../theme";
import { MessageType } from "src/models/messageModel";

interface Type {
	type?: MessageType;
}

interface IWrapper {
	show: boolean;
}

export const Wrapper = styled<IWrapper, "div">("div")`
	position: fixed;
	z-index: 2;
	left: ${props => props.theme.spacing.default()};
	right: ${props => props.theme.spacing.default(8)};
	bottom: ${props =>
		props.show
			? props.theme.spacing.default(7.5)
			: props.theme.spacing.default(-3)};
	opacity: ${props => (props.show ? "1" : "0")};
	transition: ${props => props.theme.transitions.default};
	box-shadow: ${props => props.theme.shadows.stronger};
`;

export const WrapperMessage = styled<Type, "div">("div")`
	background-color: ${p => {
		if (p.type === MessageType.succces) {
			return p.theme.colors.success();
		} else if (p.type === MessageType.error) {
			return p.theme.colors.error();
		} else {
			return p.theme.colors.gray();
		}
	}};
	color: #fff;
	display: flex;
	align-items: center;
	font-size: ${props => props.theme.fonts.sizeMedium};
	transition: ${props => props.theme.transitions.default};
	font-family: ${props => props.theme.fonts.fontFamilyDefault};
	font-weight: ${props => props.theme.fonts.fontLight};
	padding: ${props =>
		props.theme.spacing.default(0.7) +
		" " +
		props.theme.spacing.default(5) +
		" " +
		props.theme.spacing.default(0.7) +
		" " +
        props.theme.spacing.default(1.3)};
	border-radius: ${props => props.theme.radius.default};
`;
