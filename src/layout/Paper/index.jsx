import React from "react";
import { Surface } from "react-native-paper";

import Box from "layout/Box";

export default function Paper({ children, elevation = 0 }) {
	const styles = {
		height: "auto",
		width: "auto",
		elevation,
		borderRadius: "5px",
	};

	return (
		<Surface style={styles}>
			<Box p=".5rem">{children}</Box>
		</Surface>
	);
}
