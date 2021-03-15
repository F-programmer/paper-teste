import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import theme from "./styles/theme";

import Routes from "./routes/index";

import "./styles/styles.css";

import { Provider } from "react-redux";
import { store } from "store";

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<Routes />
			</PaperProvider>
		</Provider>
	);
}
