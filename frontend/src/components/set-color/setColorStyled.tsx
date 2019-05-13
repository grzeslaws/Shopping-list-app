import styled from "../../theme";
import { bgColors } from "src/theme/settings/settings-project";
import { H2 } from "src/theme/elements/Headings";

interface BgColorsProps {
	color: typeof bgColors;
	currentColor: boolean;
}

export const ColorItem = styled<BgColorsProps, "div">("div")`
	border-radius: ${p => p.theme.radius.oval};
	border: 2px solid ${p => p.color[1]};
	background-color: ${p => (p.currentColor ? p.color[1] : p.color[0])};
	width: ${p => p.theme.spacing.default(2.5)};
	height: ${p => p.theme.spacing.default(2.5)};
	margin-left: ${p => p.theme.spacing.default()};

	&:first-child {
		margin-left: unset;
	}
`;

export const WrapperColors = styled.div`
	display: flex;
`;

export const Headline = styled(H2)`
	color: ${p => p.theme.colors.gray()};
	font-weight: ${p => p.theme.fonts.fontLight};
`;
