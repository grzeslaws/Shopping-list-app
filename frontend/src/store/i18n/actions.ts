import { UPDATE_I18N, UpdateI18nAction, UpdateCheckedLanguageAction, UPDATE_CHECKED_LANGUAGE } from "./types";
import { Dispatch } from "redux";
import { i18n, I18N, Language } from "src/internationalization";

const updateI18nAction = (payload: I18N): UpdateI18nAction => {
	return {
		type: UPDATE_I18N,
		payload
	};
};

const updateCheckedLanguageAction = (payload: Language): UpdateCheckedLanguageAction => {
	return {
		type: UPDATE_CHECKED_LANGUAGE,
		payload
	};
};

export const updateI18n = (language: Language) => {
	return (dispatch: Dispatch) => {
		dispatch(updateI18nAction(i18n[language]));
		dispatch(updateCheckedLanguageAction(language));
	};
};
