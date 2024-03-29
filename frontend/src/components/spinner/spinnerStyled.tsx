import styled, { keyframes } from "../../theme";

interface ISpinner {
	show?: boolean;
}

const spinner = keyframes`
    0% {
        background-color: $color-primary;
        width: 0;
        box-shadow: $shadow-small;
    }
    100% {
        background-color: $color-secondary;
        width: 80%;
    }
`;

export const SpinnerElement = styled<ISpinner, "div">("div")`
	position: fixed;
	width: ${props => (!props.show ? "100%" : "80%")};
	left: 0;
	top: 0;
	height: ${props => props.theme.spacing.default(0.2)};
	background-color: ${props => props.theme.colors.primary()};
	animation-name: ${spinner};
	animation-duration: 2s;
	animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
	transition: ${props => props.theme.transitions.default};
	opacity: ${props => (!props.show ? 0 : 1)};
	z-index: 4;
`;
