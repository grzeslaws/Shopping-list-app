import styled from "..";

export const THead = styled.tbody`
	font-weight: ${p => p.theme.fonts.fontBold};
`;
export const TBody = styled.tbody``;

export const Table = styled.table`
	border: ${p => p.theme.colors.grayLight};
`;

export const Td = styled.td`
	border: ${p => p.theme.colors.grayLight};
	padding: ${p =>
		p.theme.spacing.default(1.5) + " " + p.theme.spacing.default(2)};
	font-size: ${p => p.theme.fonts.sizeBase};
	color: ${p => p.theme.colors.gray(0.7)};
	transition: ${p => p.theme.transitions.default};
`;

export const Tr = styled.tr`
	border-bottom: 1px solid ${p => p.theme.colors.grayLight};
	transition: ${p => p.theme.transitions.default};
	cursor: pointer;

	&:last-child {
		border-bottom: unset;
	}

	&:hover {
		background-color: ${p => p.theme.colors.primaryLight};
		color: ${p => p.theme.colors.gray()};
	}

	&:hover ${Td} {
		color: ${p => p.theme.colors.gray()};
	}
`;
