import React from "react";

import { StyledDiv } from "./styles";

export default function Scroll({
	children,
	direction,
	h = "auto",
	w = "auto",
	scrollWhen = "auto",
}) {
	let config;
	if (direction === "horizontal")
		config = {
			y: "hidden",
			x: scrollWhen,
		};
	else if (direction === "vertical")
		config = {
			x: "hidden",
			y: "scroll",
		};
	else if (direction === "both")
		config = {
			x: scrollWhen,
			y: scrollWhen,
		};
	else
		config = {
			x: "hidden",
			y: "hidden",
		};

	return <StyledDiv {...{ config, h, w }}>{children}</StyledDiv>;
}
