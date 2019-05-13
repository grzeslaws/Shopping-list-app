import styled from "..";

const H1 = styled.h2`
    font-size: ${props => props.theme.fonts.h1};
    margin-bottom: ${props => props.theme.spacing.default(1.5)};
    font-weight: ${props => props.theme.fonts.fontMedium};
`;

const H2 = styled.h2`
    font-size: ${props => props.theme.fonts.h2};
    margin-bottom: ${props => props.theme.spacing.default(1.5)};
    font-weight: ${props => props.theme.fonts.fontMedium};
`;

const H3 = styled.h3`
    font-size: ${props => props.theme.fonts.h3};
    margin-bottom: ${props => props.theme.spacing.default(1.5)};
    font-weight: ${props => props.theme.fonts.fontMedium};
`;

export { H1, H2, H3 };
