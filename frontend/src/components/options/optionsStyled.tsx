import styled from "../../theme";

export const Wrapper = styled.div`
	min-height: ${p => p.theme.spacing.default(5)};
	background-color: #fff;
	box-shadow: ${p => p.theme.shadows.box};
	z-index: 1;
	display: flex;
	align-items: center;
	padding-left: ${p => p.theme.spacing.default()};
	padding-right: ${p => p.theme.spacing.default()};
	justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`;
