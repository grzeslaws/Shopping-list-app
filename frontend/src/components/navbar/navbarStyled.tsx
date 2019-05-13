import styled from "../../theme";
import { Button } from "src/theme/objects/Buttons";
import { hoverOpacity } from "src/theme/utils/hovers";

interface LangProps {
	active: boolean;
}

export const Wrapper = styled.div`
	min-height: ${p => p.theme.spacing.default(5)};
	background-color: #fff;
	box-shadow: ${p => p.theme.shadows.box};
	z-index: 2;
	position: relative;
	display: flex;
	align-items: center;
	padding-left: ${p => p.theme.spacing.default()};
	padding-right: ${p => p.theme.spacing.default()};
	justify-content: space-between;
	width: 100%;
`;

export const Logout = styled(Button)`
	margin-top: ${p => p.theme.spacing.default(1.5)};
`;

export const WrapperUser = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

export const Avatar = styled.img`
	border-radius: 50px;
	width: ${p => p.theme.spacing.default(2)};
	margin-left: ${p => p.theme.spacing.default(1.5)};

	${hoverOpacity}
`;

export const Lang = styled<LangProps, "div">("div")`
	background-color: ${p => (p.active ? p.theme.colors.primary() : "#fff")};
	color: ${p => (p.active ? "#fff" : p.theme.colors.primary())};
	border-radius: ${p => p.theme.radius.oval};
	margin-left: ${p => p.theme.spacing.default(0.3)};
	font-size: ${p => p.theme.fonts.sizeMicro};
	font-weight: ${p => p.theme.fonts.fontLight};
	text-transform: uppercase;
	width: ${p => p.theme.spacing.default(2)};
	height: ${p => p.theme.spacing.default(2)};
	display: flex;
	justify-content: center;
	align-items: center;

	&:first-child {
		margin-left: unset;
	}
`;

export const WrapperLanguage = styled.div`
	display: flex;
	margin-top: ${p => p.theme.spacing.default()};
`;
