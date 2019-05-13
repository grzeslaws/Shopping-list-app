import * as React from "react";
import { Wrapper } from "./optionsStyled";
import SharingComponent from "../shopping/SharingComponent";
import SetColorComponent from '../set-color/SetColorComponent';
import { AppState } from 'src/store';
import { connect } from 'react-redux';

interface Props {
	uniqueId: string | null;
}

export const OptionsComponent = (props: Props) => {
	
	return (
		<Wrapper>
			<SharingComponent uniqueId={props.uniqueId ? props.uniqueId : null} />
            <SetColorComponent uniqueId={props.uniqueId ? props.uniqueId : null}/>
		</Wrapper>
	);
};


const mapStateToProps = ({ currentShoppingList }: AppState): Props => ({
	uniqueId: currentShoppingList ? currentShoppingList.uniqueId : null
});

export default connect<Props, any, any>(
	mapStateToProps,
	null
)(OptionsComponent);

