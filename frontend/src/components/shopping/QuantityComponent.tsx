import * as React from "react";
import {
	WrapperCounter,
	CounterQunatity,
	CounterQunatityValue
} from "./shoppingStyled";

interface MethodProps {
	setCounter: (value: number) => void;
}

interface Props {
	counterQuantity: number;
}

export const QuantityComponent = (props: MethodProps & Props) => {
	const [counterQuantity, setCounterQuantity] = React.useState<number>(1);

	const setCounter = (value: number) => {
		if (counterQuantity === 1 && value === -1) {
			return;
		}
		setCounterQuantity(counterQuantity + value);
		props.setCounter(counterQuantity + value);
	};

	React.useMemo(() => setCounterQuantity(1), [
		props.counterQuantity === 1 && counterQuantity !== props.counterQuantity
	]);

	return (
		<WrapperCounter>
			<CounterQunatity onClick={() => setCounter(-1)}>-</CounterQunatity>
			<CounterQunatityValue>{counterQuantity}</CounterQunatityValue>
			<CounterQunatity onClick={() => setCounter(1)}>+</CounterQunatity>
		</WrapperCounter>
	);
};
