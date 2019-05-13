import styled from "..";

interface WrapperProps {
	backgroundColor?: string;
}

export const Wrapper = styled<WrapperProps, "div">("div")`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: ${p => p.theme.spacing.default()};
	min-width: ${p => p.theme.spacing.default(30)};
	background-color: ${p =>
		p.backgroundColor ? p.backgroundColor : "transparent"};
	max-width: ${p => p.theme.spacing.default(64)};
	width: 100%;
`;
