import * as React from "react";
import { SpinnerElement } from "./spinnerStyled";
import { AppState } from "src/store";
import { connect } from "react-redux";

interface Props {
	spinner: number;
}

const SpinnerComponent = (props: Props) => (
	<SpinnerElement show={!!props.spinner} />
);

const mapStateToProps = ({ spinner }: AppState): Props => ({
	spinner
});

export default connect<Props, any, any>(mapStateToProps)(SpinnerComponent);
