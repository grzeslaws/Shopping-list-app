/* tslint:disable:no-unused-variable */
import { transitions } from "../settings/settings-project";

export const hoverOpacity = () => {
	return `
        transition: ${transitions.default};
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    `;
};

export const noneUserSelect = () => {
	return `
    -webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
    `;
};
