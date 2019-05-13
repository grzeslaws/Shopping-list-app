const colors = {
	black: (opacity = 1) => `rgba(25, 42, 62, ${opacity})`,
	gray: (opacity = 1) => `rgba(76, 88, 98, ${opacity})`,
	grayLight: `rgb(235, 239, 242)`,
	success: (opacity = 1) => `rgba(46, 212, 122, ${opacity})`,
	error: (opacity = 1) => `rgba(247, 104, 91, ${opacity})`,
	warning: (opacity = 1) => `rgba(255, 185, 70, ${opacity})`,
	primary: (opacity = 1) => `rgba(16, 156, 241, ${opacity})`,
	primaryLight: `rgb(245, 246, 248)`,
	primaryDark: (opacity = 1) => `rgba(51, 77, 110, ${opacity})`
};

const bgColors = {
	blue: ["#e6f7ff", "#096dd9"],
	volcano: ["#fff2e8", "#d4380d"],
	orange: ["#fff7e6", "#d46b08"],
	gold: ["#fffbe6", "#d48806"],
	lime: ["#fcffe6", "#7cb305"],
	cyan: ["#e6fffb", "#08979c"],
	green: ["#f6ffed", "#389e0d"],
	purple: ["#f9f0ff", "#531dab"],
	magenta: ["#fff0f6", "#c41d7f"]
};

const fonts = {
	fontFamilyDefault: `'Poppins', sans-serif`,
	fontLogo: `'Pacifico', cursive`,
	materialIcons: `'Material Icons Outlined'`,
	h1: "26px",
	h2: "18px",
	h3: "15px",
	sizeBase: "13px",
	sizeMedium: "14px",
	sizeSmall: "11px",
	sizeMicro: "10px",
	fontLight: 300,
	fontMedium: 500,
	fontBold: 700,
	lineHeight: "26px",
	lineHeightSmall: "19px",
	letterSpacing: "1px"
};

const shadows = {
	box: ` 0 0 18px rgba(0, 0, 0, 0.06)`,
	stronger: `0px 6px 28px rgba(0, 0, 0, 0.2)`,
	boxLight: `0px 3px 6px rgba(0,0,0,0.03)`
};

const spacing = {
	default: (n = 1) => `${10 * n}px`
};

const transitions = {
	default: "300ms ease"
};

const paths = {
	imagePath: (path: string) => `/assets/images/${path}`
};

const radius = {
	default: "4px",
	oval: "50px"
};

const breakpoints = {
	huge: "1440px",
	large: "1170px",
	medium: "768px",
	small: "450px"
};

export {
	colors,
	bgColors,
	fonts,
	shadows,
	spacing,
	transitions,
	paths,
	breakpoints,
	radius
};

export interface ThemeProps {
	colors: typeof colors;
	bgColors: typeof bgColors;
	fonts: typeof fonts;
	shadows: typeof shadows;
	spacing: typeof spacing;
	transitions: typeof transitions;
	paths: typeof paths;
	breakpoints: typeof breakpoints;
	radius: typeof radius;
}
