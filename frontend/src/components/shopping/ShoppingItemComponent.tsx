import * as React from "react";
import { ShoppingList } from "src/models/ShoppingListModel";
import {
	Title,
	ProductItem,
	WrapperProductDetail,
	WrapperPrice,
	WrapperProducts,
	WrapperChecked,
	ProductName,
	PriceQuantity
} from "./shoppingStyled";
import { Wrapper } from "src/theme/objects/Wrappers";
import { connect } from "react-redux";
import { AppState } from "src/store";
import {
	fetchCurrentShoppingList,
	deleteProduct,
	addProduct,
	updateProduct,
	updateCurrentShoppingList,
	clearShoppingList,
	UpdateCurrentShoppingListType
} from "src/store/shopping-list/actions";
import { CheckboxComponent } from "../forms/CheckboxComponent";
import { InputComponent } from "../forms/InputComponent";
import { NewProduct } from "src/models/NewProductModel";
import { Button } from "src/theme/objects/Buttons";
import { Product } from "src/models/ProductModel";
import { Form } from "src/theme/objects/Forms";
import { InputEditableComponent } from "../forms/InputEditableComponent";
import { QuantityComponent } from "./QuantityComponent";
import { SummaryComponent } from "./SummaryComponent";
import { DateComponent } from "./DateComponent";
import { I } from "src/theme/objects/Icons";
import { OptionsComponent } from "../options/OptionsComponent";
import { I18N } from 'src/internationalization';

interface Props {
	currentShoppingList: ShoppingList | null;
	i18n: I18N;
}

interface MethodProps {
	fetchCurrentShoppingList: (uniqueId: string) => any;
	deleteProduct: (productUniqueId: string, shoppingListUniqueId: string) => any;
	addProduct: (payload: NewProduct) => any;
	updateProduct: (productUniqueId: string, payload: NewProduct) => any;
	updateCurrentShoppingList: (
		shoppingListUniqueId: string,
		args: UpdateCurrentShoppingListType
	) => any;
	clearShoppingList: () => any;
}

interface ProductValues {
	name: string;
	price: number;
}

const ShoppingItemComponent = (
	props: Props & MethodProps & { match: { params: { uniqueId: string } } }
) => {
	const INTERVAL_FOR_UPDATE_SL = 25000;

	const { match, currentShoppingList } = props;
	const shoppingListUniqueId = match.params.uniqueId;
	const productForm = React.useRef<HTMLFormElement>(null);

	React.useEffect(() => {
		props.fetchCurrentShoppingList(shoppingListUniqueId);
		let interval: any;

		interval = setInterval(() => {
			props.fetchCurrentShoppingList(shoppingListUniqueId);
		}, INTERVAL_FOR_UPDATE_SL);

		return () => {
			props.clearShoppingList();
			clearInterval(interval);
		};
	}, []);

	const [focusedInput, setFocusedInput] = React.useState<boolean>(false);

	const [productValues, setProductValues] = React.useState<ProductValues>({
		name: "",
		price: 0
	});

	const [counterQuantity, setCounterQuantity] = React.useState<number>(1);

	const handleOnChangeCheckbox = (
		e: React.ChangeEvent<HTMLInputElement>,
		product: Product
	) => {
		const payload = new NewProduct(
			product.name,
			e.target.checked,
			product.price,
			product.quantity,
			shoppingListUniqueId
		);
		props.updateProduct(product.uniqueId, payload);
	};

	const updateNameShoppinList = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.updateCurrentShoppingList(shoppingListUniqueId, {
			name: e.target.value
		});
	};

	const handleOnCHangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setProductValues(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!productValues.name) {
			return;
		}

		const payload = new NewProduct(
			productValues.name,
			false,
			productValues.price,
			counterQuantity,
			shoppingListUniqueId
		);
		props.addProduct(payload);
		productForm.current!.reset();
		setCounterQuantity(1);
		setProductValues(prevState => ({
			...prevState,
			name: "",
			price: 0
		}));
	};

	const renderPrice = (p: Product) => {
		return (
			<PriceQuantity>
				{p.quantity + props.i18n.units.unit}
				{p.price ? " , " + p.price + props.i18n.units.currency : ""}
			</PriceQuantity>
		);
	};

	const renderProducts = (checked: boolean): JSX.Element | null => {
		const products = currentShoppingList
			? currentShoppingList.products
					.filter(p => {
						return checked ? p.checked : !p.checked;
					})
					.map(p => {
						return (
							<ProductItem key={p.uniqueId}>
								<WrapperProductDetail>
									<CheckboxComponent
										checked={p.checked!}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											handleOnChangeCheckbox(e, p)
										}
									/>
									<ProductName checked={checked}>
										{p.name}
										{renderPrice(p)}
									</ProductName>
								</WrapperProductDetail>
								<I
									right={0}
									top={-3}
									onClick={() =>
										props.deleteProduct(p.uniqueId, shoppingListUniqueId)
									}
								>
									delete
								</I>
							</ProductItem>
						);
					})
			: null;

		return <WrapperProducts>{products}</WrapperProducts>;
	};

	const addNewProduct = () => {
		if (!currentShoppingList) {
			return null;
		}
		const areProducts = !!currentShoppingList.products.length;

		return (
			<Form onSubmit={onSubmit} ref={productForm as any}>
				<InputComponent
					focused={!areProducts}
					name="name"
					label={null}
					fieldType="text"
					onChange={handleOnCHangeInput}
					placeholder={props.i18n.forms.newProductName}
					activePlaceholder={true}
					marginBottom={10}
					onFocus={() => setFocusedInput(true)}
					onBlur={() => setFocusedInput(false)}
				/>
				<WrapperPrice>
					<InputComponent
						name="price"
						label={null}
						fieldType="number"
						onChange={handleOnCHangeInput}
						placeholder={props.i18n.forms.price}
						activePlaceholder={true}
						marginBottom={0}
						onFocus={() => setFocusedInput(true)}
						onBlur={() => setFocusedInput(false)}
					/>
					<QuantityComponent
						counterQuantity={counterQuantity}
						setCounter={setCounterQuantity}
					/>
				</WrapperPrice>
				<Button
					disabledState={!productValues.name}
					variant="success"
					type="submit"
				>
					{props.i18n.forms.addProduct}
				</Button>
			</Form>
		);
	};

	return (
		<>
			<Wrapper
				backgroundColor={currentShoppingList ? currentShoppingList.color : ""}
			>
				{currentShoppingList && (
					<>
						<DateComponent
							date={props.currentShoppingList!.createdAt}
							users={props.currentShoppingList!.users}
						/>
						<InputEditableComponent
							name="price"
							fieldType="text"
							onChange={updateNameShoppinList}
							placeholder={props.i18n.forms.changeListTitle}
							activePlaceholder={true}
							marginBottom={0}
							value={currentShoppingList.name}
							element={Title}
							iconName="edit"
						/>
					</>
				)}
				{renderProducts(false)}
				{addNewProduct()}
				<SummaryComponent
					sum={props.currentShoppingList ? props.currentShoppingList.sum : 0}
					i18n={props.i18n}
				/>
				<WrapperChecked>{renderProducts(true)}</WrapperChecked>
			</Wrapper>
			{!focusedInput && (
				<OptionsComponent
					uniqueId={currentShoppingList ? currentShoppingList.uniqueId : null}
				/>
			)}
		</>
	);
};

const mapStateToProps = ({ currentShoppingList, i18n }: AppState): Props => ({
	currentShoppingList, i18n
});

const mapDispachToProps: MethodProps = {
	fetchCurrentShoppingList,
	deleteProduct,
	addProduct,
	updateProduct,
	updateCurrentShoppingList,
	clearShoppingList
};

export default connect<Props, any, any>(
	mapStateToProps,
	mapDispachToProps
)(ShoppingItemComponent);
