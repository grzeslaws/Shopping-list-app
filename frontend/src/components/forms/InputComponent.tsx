import * as React from "react";
import {
	Input,
	WrapperInput,
	Label,
	ErrorMessage
} from "src/theme/objects/Forms";

interface InputComponentProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
	name: string;
	label?: string | null;
	fieldType: string;
	required?: boolean;
	errorMessage?: string;
	placeholder?: string;
	activePlaceholder?: boolean;
	marginBottom?: number;
	focused?: boolean;
	onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => any;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const InputComponent = (props: InputComponentProps) => {
	const focusedInput = React.useRef<HTMLInputElement>(null); 
	
	
	React.useEffect(() => {
		if (props.focused) {
			focusedInput.current!.focus();
		}
	}, [props.focused]);
	return (
		<WrapperInput marginBottom={props.marginBottom}>
			{props.label && <Label>{props.label}</Label>}
			<Input
				ref={focusedInput as any}
				onChange={props.onChange}
				name={props.name}
				type={props.fieldType}
				placeholder={props.placeholder}
				activePlaceholder={props.activePlaceholder}
				step="0.01"
				onFocus={props.onFocus}
				onBlur={props.onBlur}
			/>
			<ErrorMessage>{props.errorMessage}</ErrorMessage>
		</WrapperInput>
	);
};
