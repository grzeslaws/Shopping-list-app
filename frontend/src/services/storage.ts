const TOKEN_NAME = "googleAccessToken";
export const setTokenInLocalStorage = (value: string) =>
	localStorage.setItem(TOKEN_NAME, value);
export const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN_NAME);
export const removeTokenFromLocalStorage = () =>
	localStorage.removeItem(TOKEN_NAME);
export const getHeadersAuthorization = () =>
	getTokenFromLocalStorage()
		? `Bearer ${getTokenFromLocalStorage()}`
		: null;
