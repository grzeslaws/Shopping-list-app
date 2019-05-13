export const loadGoogleApis = (): void => {
	const script: HTMLScriptElement = document.createElement("script");
	script.src = "https://apis.google.com/js/platform.js?onload=init";
	script.async = true;
	document.body.appendChild(script);
};
