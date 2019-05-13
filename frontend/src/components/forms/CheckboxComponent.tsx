import * as React from "react";
import {
	Checkbox,
	WrapperCheckbox,
	WrapperCheck
} from "src/theme/objects/Forms";

import CheckSvg from "-!svg-react-loader?name=Icon!src/assets/images/icon-check.svg";

interface CheckboxComponent {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
	checked: boolean;
	label?: string;
}

export const CheckboxComponent = (props: CheckboxComponent) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(e);
	};
	return (
		<WrapperCheckbox>
			<WrapperCheck checked={props.checked}>
				<CheckSvg />
			</WrapperCheck>
			<Checkbox onChange={onChange} type="checkbox" checked={props.checked} />
			{props.label && <div>{props.label}</div>}
		</WrapperCheckbox>
	);
};
