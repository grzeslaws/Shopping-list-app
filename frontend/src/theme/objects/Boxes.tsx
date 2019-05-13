import styled from "..";

export const Box = styled.div`
	background-color: #fff;
	box-shadow: ${p => p.theme.shadows.box};
	padding: ${p => p.theme.spacing.default(4)};
    border-radius: ${p => p.theme.radius.default}
`;
