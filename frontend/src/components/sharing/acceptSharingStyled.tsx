import styled from "../../theme";

interface WrapperProps {
	show: boolean;
}

export const Wrapper = styled<WrapperProps, "div">("div")`
	position: relative;
	display: ${p => (p.show ? "flex" : "none")};
`;

export const SharingCount = styled.div`
	background-color: ${p => p.theme.colors.error()};
	font-family: ${p => p.theme.fonts.fontFamilyDefault};
	border-radius: ${p => p.theme.radius.oval};
	color: #fff;
	position: absolute;
	top: -4px;
	right: -4px;
	height: ${p => p.theme.spacing.default(1.5)};
	min-width: ${p => p.theme.spacing.default(1.5)};
	font-size: ${p => p.theme.fonts.sizeMicro};
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${p => p.theme.fonts.fontLight};
`;

export const ListItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${p => p.theme.spacing.default(1.5)};

	&:last-child {
		margin-bottom: unset;
	}
`;

export const ListDetails = styled.div`
	min-width: ${p => p.theme.spacing.default(14)};
`;

export const ListName = styled.div`
	font-weight: ${p => p.theme.fonts.fontMedium};
	margin-top: ${p => p.theme.spacing.default(0.2)};
	min-width: ${p => p.theme.spacing.default(20)};
    max-width: ${p => p.theme.spacing.default(25)};
`;

export const WrapperButton = styled.div`
	display: flex;
	margin-top: ${p => p.theme.spacing.default()};
`;
