import styled from "../../theme";
import { Box } from "src/theme/objects/Boxes";
import { H2, H1 } from "src/theme/elements/Headings";
import { Wrapper } from "src/theme/objects/Wrappers";
import { Logo } from "src/theme/objects/Logos";

interface ImgProps {
	width?: number;
}

export const WrapperLogin = styled(Wrapper)`
	justify-content: space-between;
	align-items: center;
`;

export const BoxLogin = styled(Box)`
	display: flex;
	flex-direction: column;
	max-width: ${p => p.theme.spacing.default(50)};
	width: 100%;
`;

export const LogiHeadline = styled(H2)`
	margin-bottom: ${p => p.theme.spacing.default(3)};
	color: ${p => p.theme.colors.gray()};
`;

export const Headline = styled(H1)`
	color: ${p => p.theme.colors.primary()};
	font-weight: ${p => p.theme.fonts.fontLight};
	margin-bottom: ${p => p.theme.spacing.default(3)};
	max-width: ${p => p.theme.spacing.default(24)};
	text-align: center;
`;

export const LogoNavbar = styled(Logo)`
	margin-top: ${p => p.theme.spacing.default(1)};
`;

export const WrapperOne = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${p => p.theme.spacing.default(5)};
`;

export const Img = styled<ImgProps, "img">("img")`
	border-radius: ${p => p.theme.radius.default};
	box-shadow: ${p => p.theme.shadows.stronger};
	width: ${p => (p.width ? p.width + "px" : "unset")};
`;

export const TextDescription = styled.div`
	font-size: ${p => p.theme.fonts.h3};
	margin-bottom: ${p => p.theme.spacing.default(2)};
	padding-left: ${p => p.theme.spacing.default(3)};
	padding-right: ${p => p.theme.spacing.default(3)};
	color: ${p => p.theme.colors.gray()};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: ${p => p.theme.spacing.default(6)};

	&:before {
		content: "";
		background-color: ${p => p.theme.colors.primary()};
		width: ${p => p.theme.spacing.default(2.4)};
		height: ${p => p.theme.spacing.default(0.1)};
		margin-bottom: ${p => p.theme.spacing.default(2)};
	}
`;

export const Footer = styled.div`
	font-size: ${p => p.theme.fonts.sizeMicro};
	margin-top: ${p => p.theme.spacing.default(6)};
	color: ${p => p.theme.colors.gray(0.6)};
`;
