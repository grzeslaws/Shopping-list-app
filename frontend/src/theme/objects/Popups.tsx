import styled, { keyframes } from "..";

interface WrapperPopupProps {
	show: boolean;
	isCenter?: boolean;
}

interface PopupItemProps {
	smaller?: boolean;
}

const Popup = styled.div`
	padding: ${p => p.theme.spacing.default()};
	background-color: #fff;
	box-shadow: ${p => p.theme.shadows.stronger};
	border-radius: ${p => p.theme.radius.default};
	z-index: 1;
	transition: ${p => p.theme.transitions.default};
`;

const WrapperPopup = styled<WrapperPopupProps, "div">("div")`
	display: ${p => (p.show ? "flex" : "none")};

	${p =>
		p.isCenter
			? `
				position: fixed; 
				left: 0; 
				top: 0; 
				width: 100%; 
				height: 100%;
				justify-content: center; 
				align-items: center;
				z-index: 1;
			`
			: null}

	&:before {
		content: "";
		display: block;
		background-color: rgba(255, 255, 255, 0.9);
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		position: fixed;
		z-index: 1;
	}

	${Popup} {
		${p =>
			p.isCenter
				? `position: relative; max-width: 90%;`
				: `position: absolute; right: 0; top: 0;`}
	}
`;

const PopupItem = styled<PopupItemProps, "div">("div")`
	font-size: ${p =>
		p.smaller ? p.theme.fonts.sizeSmall : p.theme.fonts.sizeMedium};
	margin-bottom: ${p => p.theme.spacing.default(0.5)};
`;

export { WrapperPopup, Popup, PopupItem };
