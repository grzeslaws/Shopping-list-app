import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "./theme/elements/Global";
import { themeProps, ThemeProvider } from "./theme";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";
import { LayoutComponent } from "./components/layout/LayoutComponent";

ReactDOM.render(
	<Provider store={configureStore()}>
		<GlobalStyle theme={themeProps} />
		<ThemeProvider theme={themeProps}>
			<LayoutComponent />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root") as HTMLElement
);

serviceWorker.register();
