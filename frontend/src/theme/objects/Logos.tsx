import styled from "..";
import { H2 } from '../elements/Headings';
import { hoverOpacity } from '../utils/hovers';

export const Logo = styled(H2)`
	color: ${p => p.theme.colors.primary()};
	margin-bottom: unset;
	font-family: ${p => p.theme.fonts.fontLogo};
	font-size: 21px;

	${hoverOpacity}
`;