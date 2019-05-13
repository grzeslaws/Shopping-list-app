import { createGlobalStyle } from "..";
import boxSizing from "../generic/box-sizing";
import normalize from "../generic/normalize";
import reset from "../generic/reset";
import fonts from "../settings/fonts";

export const GlobalStyle = createGlobalStyle`
    ${boxSizing}
    ${normalize}
    ${reset}
    ${fonts}
    
    html,
    body {
        color: ${p => p.theme.colors.black()};
        font-family: ${p => p.theme.fonts.fontFamilyDefault};
        font-weight: ${p => p.theme.fonts.fontLight};
        height: 100%;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        background-color: ${p => p.theme.colors.primaryLight};
    }

    #root {
        height: 100%; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;}             
 
    input[type=number] {-moz-appearance: textfield;}
`;
