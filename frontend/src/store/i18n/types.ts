import { I18N, Language } from 'src/internationalization';

export const UPDATE_I18N = "UPDATE_I18N";
export const UPDATE_CHECKED_LANGUAGE = "UPDATE_CHECKED_LANGUAGE";

export interface UpdateI18nAction {
	type: typeof UPDATE_I18N;
	payload: I18N;
}

export interface UpdateCheckedLanguageAction {
	type: typeof UPDATE_CHECKED_LANGUAGE;
	payload: Language;
}
