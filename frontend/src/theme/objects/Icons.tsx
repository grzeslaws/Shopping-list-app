import * as React from "react";
import styled from "..";
import { hoverOpacity } from "../utils/hovers";

interface IProps {
	top?: number;
	right?: number;
	left?: number;
	bottom?: number;
	color?: "error" | "primary" | "success" | "white";
	fontSize?: 24 | 18;
}

export const I = styled<IProps, "i">("i")`
	font-family: ${p => p.theme.fonts.materialIcons};
	font-weight: normal;
	font-style: normal;
	font-size: ${p => {
		if (p.fontSize === 18) {
			return "18px";
		} else {
			return "24px";
		}
	}};
	line-height: 1.15;
	display: inline-block;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;
	text-rendering: optimizeLegibility;
	-moz-osx-font-smoothing: grayscale;
	font-feature-settings: "liga";

	position: ${p => {
		if (
			p.top ||
			p.bottom ||
			p.left ||
			p.right ||
			p.top === 0 ||
			p.bottom === 0 ||
			p.left === 0 ||
			p.right === 0
		) {
			return "absolute";
		} else {
			return "relative";
		}
	}};
	top: ${p => (p.top || p.top === 0 ? p.top + "px" : "unset")};
	bottom: ${p => (p.bottom || p.bottom === 0 ? p.bottom + "px" : "unset")};
	right: ${p => (p.right || p.right === 0 ? p.right + "px" : "unset")};
	left: ${p => (p.left || p.left === 0 ? p.left + "px" : "unset")};
	color: ${p => {
		if (p.color) {
			if (p.color === "error") {
				return p.theme.colors.error();
			} else if (p.color === "success") {
				return p.theme.colors.success();
			} else if (p.color === "white") {
				return "#fff";
			} else {
				return p.theme.colors.primary();
			}
		} else {
			return p.theme.colors.gray();
		}
	}};
	-webkit-touch-callout: none; 
	-webkit-user-select: none; 
	-khtml-user-select: none; 
	-moz-user-select: none; 
	-ms-user-select: none;
	user-select: none;

	&:hover {
		${hoverOpacity}
	}
`;
