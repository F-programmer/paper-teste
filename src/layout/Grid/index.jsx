import React from "react";

import { styles } from "./styles";

export default function Grid({
	children,
	container = false,
	item = false,
	direction = "row",
	justify = "flex-start",
	alignItems = "stretch",
	xs,
	h = "auto",
	...props
}) {
	return (
		<div
			style={styles({
				container,
				item,
				direction,
				justify,
				alignItems,
				xs,
				h,
			})}
			{...props}
		>
			{item && container ? (
				<Grid
					container
					item={false}
					{...{
						direction,
						justify,
						alignItems,
						h,
					}}
				>
					{children}
				</Grid>
			) : (
				children
			)}
		</div>
	);
}
