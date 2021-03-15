import React from "react";

export default function UIText({
	children,
	size = "14px",
	color = "var(--t-primary)",
	weight = 400,
}) {
	const styles = {
		fontSize: size,
		color,
		fontWeight: weight,
		fontFamily: "Poppins",
	};
	return <div style={styles}>{children}</div>;
}
