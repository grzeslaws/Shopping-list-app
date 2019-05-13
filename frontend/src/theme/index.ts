import * as styledComponents from "styled-components";
import * as settings from "./settings/settings-project"; 

const { default: styled, css, keyframes, ThemeProvider, createGlobalStyle } = styledComponents as styledComponents.ThemedStyledComponentsModule<settings.ThemeProps>;

export default styled;
export { css, keyframes, ThemeProvider, createGlobalStyle };

export const themeProps = {
    colors: settings.colors,
    bgColors: settings.bgColors,
    fonts: settings.fonts,
    shadows: settings.shadows,
    spacing: settings.spacing,
    transitions: settings.transitions,
    paths: settings.paths,
    breakpoints: settings.breakpoints,
    radius: settings.radius,
};
