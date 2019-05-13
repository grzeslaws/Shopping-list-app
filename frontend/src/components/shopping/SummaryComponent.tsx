import * as React from "react";
import { WrapperSummary, Sum, Currency } from "./shoppingStyled";
import { I18N } from "src/internationalization";

interface Props {
	sum: number;
	i18n: I18N;
}

export const SummaryComponent = (props: Props) => {
	return (
		<WrapperSummary>
			{props.i18n.summaryComponent.sum}:<Sum>{props.sum}</Sum>
			<Currency>{props.i18n.units.currency}</Currency>
		</WrapperSummary>
	);
};
