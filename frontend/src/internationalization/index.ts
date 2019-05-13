import { en } from "./en";
import { pl } from "./pl";

export const i18n = {
	en,
	pl
};

export type I18N = typeof en;

export enum Language {
	en = "en",
	pl = "pl"
}
