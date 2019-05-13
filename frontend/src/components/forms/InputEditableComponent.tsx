import * as React from "react";
import { Input, WrapperInput, InputInherit } from "src/theme/objects/Forms";
import * as styledComponents from "styled-components";
import { ThemeProps } from "src/theme/settings/settings-project";
import { I } from "src/theme/objects/Icons";

interface InputEditableProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
	name: string;
	fieldType: string;
	placeholder?: string;
	activePlaceholder?: boolean;
	marginBottom?: number;
	focused?: boolean;
	value?: string | undefined;
	element: styledComponents.StyledComponentClass<
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>,
		ThemeProps,
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLHeadingElement>,
			HTMLHeadingElement
		>
	>;
	iconName?: string;
}

export const InputEditableComponent = (props: InputEditableProps) => {
	const focusedInput = React.useRef<HTMLInputElement>(null);
	const [value, setValue] = React.useState(props.value ? props.value : "");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(e);
		setValue(e.target.value);
	};

	React.useEffect(() => {
		if (props.focused) {
			focusedInput.current!.focus();
		}
	}, []);
	return (
		<WrapperInput marginBottom={props.marginBottom}>
			<props.element>
				<InputInherit
					ref={focusedInput as any}
					onChange={onChange}
					name={props.name}
					type={props.fieldType}
					placeholder={props.placeholder}
					activePlaceholder={props.activePlaceholder}
					value={value}
					paddingLeft={props.iconName ? 26 : null}
				/>
			</props.element>
			{props.iconName && <I left={0} top={8} fontSize={18}>{props.iconName}</I>}
		</WrapperInput>
	);
};
