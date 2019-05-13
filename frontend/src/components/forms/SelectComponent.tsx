import * as React from "react";
import {
	SelectItem,
	SelectWrapper,
	Input,
	SelectItems,
	WrapperArrowDown,
	WrapperClear
} from "src/theme/objects/Forms";

import ArrowDownSvg from "-!svg-react-loader?name=Icon!src/assets/images/icon-arrow-down.svg";
import CancelSvg from "-!svg-react-loader?name=Icon!src/assets/images/icon-cancel.svg";

import useOnClickOutside from "use-onclickoutside";

interface Data {
	label: string;
	value: string;
}

interface SelectComponentProps {
	items: Data[];
	placeholder: string;
	checkedItem: (item: string) => void;
}

interface SelectState {
	selectIndex: number;
	showItems: boolean;
	term: string;
	items: Data[];
	placeholder: string;
}

export const SelectComponent = (props: SelectComponentProps) => {
	const [state, setState] = React.useState<SelectState>({
		selectIndex: 0,
		showItems: false,
		term: "",
		items: props.items,
		placeholder: props.placeholder
	});

	const selectWrapper = React.useRef(null);
	const toggleItems = (flag: boolean) => {
		setState(prevState => ({ ...prevState, showItems: flag }));
	};

	useOnClickOutside(selectWrapper, () => toggleItems(false));

	const checkedItem = (item: Data, index: number) => {
		props.checkedItem(item.value);
		setState(prevState => ({
			...prevState,
			selectIndex: index,
			term: ""
		}));
		toggleItems(false);
		setPlaceholder("");
	};

	const renderItems = () => {
		return state.items.map((item, index) => {
			return (
				<SelectItem
					isSelected={index === state.selectIndex}
					key={index}
					onClick={(e: React.MouseEvent<HTMLDivElement>) =>
						checkedItem(item, index)
					}
				>
					{item.label}, {index}
				</SelectItem>
			);
		});
	};

	const filterItems = (term: string) => {
		const filteredItems = props.items.filter(
			(i: Data) =>
				i.label.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1
		);
		setState(prevState => ({ ...prevState, items: filteredItems }));
	};

	const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "ArrowDown" && state.selectIndex < state.items.length - 1) {
			setState(prevState => ({
				...prevState,
				selectIndex: state.selectIndex + 1
			}));
		} else if (e.key === "ArrowUp" && state.selectIndex > 0) {
			setState(prevState => ({
				...prevState,
				selectIndex: state.selectIndex - 1
			}));
		} else if (e.key === "Escape") {
			toggleItems(false);
		} else if (e.key === "Enter") {
			props.checkedItem(state.items[state.selectIndex].value);
			setState(prevState => ({
				...prevState,
				term: ""
			}));
			toggleItems(false);
			setPlaceholder("");
		}
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setState(prevState => ({
			...prevState,
			term: e.target.value,
			showItems: true
		}));
		filterItems(e.target.value);
	};

	const onClick = () => {
		const i = props.items.indexOf(state.items[state.selectIndex]);
		setState(prevState => ({ ...prevState, selectIndex: i }));
		filterItems("");
		toggleItems(!state.showItems);
	};

	const setPlaceholder = (p: string) =>
		setState(prevState => ({ ...prevState, placeholder: p }));

	const clearSelect = () => {
		setPlaceholder(props.placeholder);
		props.checkedItem("");
	};

	return (
		<SelectWrapper ref={selectWrapper}>
			<WrapperArrowDown active={state.showItems}>
				<ArrowDownSvg />
			</WrapperArrowDown>
			<WrapperClear
				active={state.showItems || !!state.placeholder}
				onClick={clearSelect}
			>
				<CancelSvg />
			</WrapperClear>
			<Input
				type="text"
				onClick={() => onClick()}
				onKeyDown={onKeyPress}
				onChange={onChange}
				placeholder={
					state.placeholder
						? state.placeholder
						: state.items[state.selectIndex].label
				}
				activePlaceholder={!!state.placeholder}
				value={state.term}
			/>
			<SelectItems show={state.showItems}>{renderItems()}</SelectItems>
		</SelectWrapper>
	);
};
