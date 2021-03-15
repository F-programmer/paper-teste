import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from "./font";

const theme = {
	...DefaultTheme,
	fonts: configureFonts(customFonts),
	roundness: 30,
	colors: {
		...DefaultTheme.colors,
		primary: "#00c652",
		secondary: "#e1e2e1",
		success: "#009944",
		error: "#c9000f",
		info: "#2196f3",
		"t-primary": "#565656",
		"t-secondary": "#fff",
		"t-disabled": "#e1e2e1",
		black: "#000",
		white: "#fff",
	},
};

export default theme;
