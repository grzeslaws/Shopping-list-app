import {
	UPDATE_I18N,
	UpdateI18nAction,
	UpdateCheckedLanguageAction,
	UPDATE_CHECKED_LANGUAGE
} from "./types";
import { I18N, i18n, Language } from "src/internationalization";

const defaultLanguage: Language = Language.pl;
// navigator.language || (navigator as any).userLanguage || "en";

export const i18nReducer = (
	state = i18n[defaultLanguage],
	action: UpdateI18nAction
): I18N => {
	switch (action.type) {
		case UPDATE_I18N: {
			return action.payload;
		}
		default:
			return state;
	}
};

export const checkedLanguageReducer = (
	state = defaultLanguage,
	action: UpdateCheckedLanguageAction
): Language => {
	switch (action.type) {
		case UPDATE_CHECKED_LANGUAGE: {
			return action.payload;
		}
		default:
			return state;
	}
};
