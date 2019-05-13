import styled from "../../theme";
import { H2 } from "src/theme/elements/Headings";
import { hoverOpacity, noneUserSelect } from "src/theme/utils/hovers";
import { Link } from "react-router-dom";

interface ProductNameProps {
	checked: boolean;
}

interface ShoppingListBoxProps {
	color: string;
}

export const ShoppingListBox = styled<ShoppingListBoxProps, "div">("div")`
	box-shadow: ${p => p.theme.shadows.box};
	border-radius: ${p => p.theme.radius.default};
	margin-bottom: ${p => p.theme.spacing.default()};
	padding: ${p => p.theme.spacing.default()};
	background-color: ${p => p.color};
	position: relative;
`;

export const Title = styled(H2)`
	margin-bottom: ${p => p.theme.spacing.default(1.5)};
`;

export const ProductItem = styled.div`
	display: flex;
	margin-bottom: ${p => p.theme.spacing.default(1.5)};
	align-items: center;
	justify-content: space-between;
	font-size: ${p => p.theme.fonts.sizeMedium};
	position: relative;
`;

export const WrapperProducts = styled.div`
	margin-bottom: ${p => p.theme.spacing.default()};
`;

export const RemoveProduct = styled.div`
	color: ${p => p.theme.colors.error()};
	cursor: pointer;
`;

export const WrapperProductDetail = styled.div`
	display: flex;
`;

export const WrapperPrice = styled.div`
	display: flex;
	margin-bottom: ${p => p.theme.spacing.default()};
`;

export const CounterQunatity = styled.div`
	background-color: ${p => p.theme.colors.primary()};
	color: #fff;
	width: ${p => p.theme.spacing.default(2.5)};
	height: ${p => p.theme.spacing.default(2.5)};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: ${p => p.theme.radius.default};
	cursor: pointer;
	border: none;
	outline: 0;
	font-family: ${p => p.theme.fonts.fontFamilyDefault};
	font-weight: ${p => p.theme.fonts.fontLight};

	${hoverOpacity()}
	${noneUserSelect()}
`;

export const CounterQunatityValue = styled.div`
	text-align: center;
	width: ${p => p.theme.spacing.default(3)};
`;

export const WrapperCounter = styled.div`
	display: flex;
	align-items: center;
	margin-left: ${p => p.theme.spacing.default()};
`;

export const AddNewList = styled.div`
	background-color: ${p => p.theme.colors.success()};
	border-radius: ${p => p.theme.radius.oval};
	width: ${p => p.theme.spacing.default(5)};
	height: ${p => p.theme.spacing.default(5)};
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${p => p.theme.shadows.box};
	position: fixed;
	bottom: ${p => p.theme.spacing.default()};
	right: ${p => p.theme.spacing.default()};

	${hoverOpacity()}
	${noneUserSelect()}

	&:before {
		content: "+";
		color: #fff;
		font-family: ${p => p.theme.fonts.fontFamilyDefault};
		font-size: ${p => p.theme.fonts.h1};
		font-weight: ${p => p.theme.fonts.fontLight};
	}
`;

export const WrapperChecked = styled.div`
	margin-top: ${p => p.theme.spacing.default(4)};
	padding-bottom: ${p => p.theme.spacing.default(4)};
`;

export const ProductName = styled<ProductNameProps, "div">("div")`
	text-decoration: ${p => (p.checked ? "line-through" : "unset")};
	color: ${p => (p.checked ? p.theme.colors.gray(0.3) : "unset")};
	display: flex;
	align-items: baseline;
	font-weight: ${p => p.theme.fonts.fontMedium};
`;

export const PriceQuantity = styled.div`
	margin-left: ${p => p.theme.spacing.default()};
	font-size: ${p => p.theme.fonts.sizeSmall};
	font-weight: ${p => p.theme.fonts.fontLight};
`;

export const WrapperSummary = styled.div`
	margin-top: ${p => p.theme.spacing.default(3)};
	display: flex;
	margin-left: auto;
	align-items: baseline;
`;

export const Sum = styled.div`
	font-size: ${p => p.theme.fonts.h1};
	margin-left: ${p => p.theme.spacing.default()};
`;

export const Currency = styled.div`
	margin-left: ${p => p.theme.spacing.default(0.5)};
`;

export const DateShoppingList = styled.div`
	color: ${p => p.theme.colors.gray(0.7)};
	font-size: ${p => p.theme.fonts.sizeMicro};
	font-weight: ${p => p.theme.fonts.fontMedium};
`;

export const LinkTitle = styled(H2.withComponent(Link))`
	color: ${p => p.theme.colors.black()};
`;

export const WrapperNameRemove = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${p => p.theme.spacing.default()};
	padding-right: ${p => p.theme.spacing.default(6)};
`;

export const WrapperShortProducts = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ProductShort = styled(ProductName)`
	margin-right: ${p => p.theme.spacing.default(0.5)};
	margin-bottom: ${p => p.theme.spacing.default(0.5)};
	font-weight: ${p => p.theme.fonts.fontLight};
	font-size: ${p => p.theme.fonts.sizeMedium};

	&:after {
		content: ",";
	}

	&:last-child {
		margin-right: unset;

		&:after {
			display: none;
		}
	}
`;

export const WrapperInput = styled.div`
	min-width: ${p => p.theme.spacing.default(22)};
`;

export const WrapperShare = styled.div`
	top: ${p => p.theme.spacing.default()};
	right: ${p => p.theme.spacing.default(4)};
	position: absolute;
`;

export const WrapperSharing = styled.div`
	position: relative;
	display: flex;
`;
