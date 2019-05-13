import styled from "..";

interface Button {
	small?: boolean;
	variant?: "success" | "error";
	disabledState?: boolean;
	marginLeft?: number;
	marginRight?: number;
}

const Button = styled<Button, "button">("button")`
	background-color: ${p => {
		if (p.variant === "success") {
			return p.theme.colors.success();
		} else if (p.variant === "error") {
			return p.theme.colors.error();
		}
		return p.theme.colors.primary();
	}};
	color: #fff;
	justify-content: center;
	border-radius: ${p => p.theme.radius.default};
	font-size: ${p => {
		if (p.small) {
			return p.theme.fonts.sizeSmall;
		}
		return p.theme.fonts.sizeBase;
	}};
	letter-spacing: ${p => p.theme.fonts.letterSpacing};
	border: 0;
	display: flex;
	min-height: ${p => {
		if (p.small) {
			return p.theme.spacing.default(2.2);
		}
		return p.theme.spacing.default(4.2);
	}};
	align-items: center;
	line-height: 1;
	outline: 0;
	transition: ${p => p.theme.transitions.default};
	font-family: ${p => p.theme.fonts.fontFamilyDefault};
	font-weight: ${p => {
		if (p.small) {
			return p.theme.fonts.fontLight;
		}
		return p.theme.fonts.fontMedium;
	}};
	width: ${p => {
		if (p.small) {
			return "fit-content";
		}
		return "auto";
	}};
	height: max-content;
	padding: ${p => {
		if (p.small) {
			return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(1.5);
		}
		return p.theme.spacing.default(0.3) + " " + p.theme.spacing.default(2);
	}};

	transition: ${p => p.theme.transitions.default};
	box-shadow: ${p => p.theme.shadows.box};
	cursor: ${p => (p.disabledState ? "not-allowed" : "pointer")};
	opacity: ${p => (p.disabledState ? 0.8 : "unset")};
	margin-left: ${p => p.marginLeft ? p.marginLeft + "px" : "unset"};
	margin-right: ${p => p.marginRight ? p.marginRight + "px" : "unset"};

	&:hover {
		opacity: 0.8;
	}
`;

export { Button };
