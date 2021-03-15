import React from "react";

import { StyledDiv } from "./styles";

export default function Box({
	children,
	m = "none",
	ml = "none",
	mr = "none",
	mt = "none",
	mb = "none",
	p = "none",
	pl = "none",
	pr = "none",
	pt = "none",
	pb = "none",
	bgcolor = "none",
	width = "auto",
	height = "auto",
	border = "none",
	fakeField = false,
	onClick = () => {},
	visibility = "visible",
	display = "auto",
}) {
	const props = {
		m,
		ml,
		mr,
		mt,
		mb,
		p,
		pl,
		pr,
		pt,
	};
	let auxConfig = {
		pb,
		bgcolor,
		width,
		height,
		border,
		visibility,
		display,
	};
	const mainItems = ["m", "p"];
	const secondaryItems = ["l", "r", "t", "b"];
	mainItems.map((main) => {
		const myConfig = [{ [main]: props[main] }];
		secondaryItems.forEach((secondary) => {
			const key = `${main}${secondary}`;
			const item = props[key];
			if (item === 0 || item === "none") myConfig.unshift({ [key]: item });
			else myConfig.push({ [key]: item });
		});
		const reduced = myConfig.reduce((acumulator, newValue) =>
			Object.assign({}, acumulator, newValue)
		);
		auxConfig = {
			...auxConfig,
			...reduced,
		};
	});

	let config = {};
	Object.keys(auxConfig).forEach((key) => {
		let prop;
		switch (key) {
			case "m":
				prop = "margin";
				break;
			case "ml":
				prop = "margin-left";
				break;
			case "mr":
				prop = "margin-right";
				break;
			case "mt":
				prop = "margin-top";
				break;
			case "mb":
				prop = "margin-bottom";
				break;
			case "p":
				prop = "padding";
				break;
			case "pl":
				prop = "padding-left";
				break;
			case "pr":
				prop = "padding-right";
				break;
			case "pt":
				prop = "padding-top";
				break;
			case "pb":
				prop = "padding-bottom";
				break;
			case "bgcolor":
				prop = "background-color";
				break;
			case "width":
				prop = "width";
				break;
			case "height":
				prop = "height";
				break;
			case "border":
				prop = "border";
				break;
			case "visibility":
				prop = "visibility";
				break;
			case "display":
				prop = "display";
				break;
			default:
				prop = "";
		}
		config[prop] = auxConfig[key];
	});

	let writed = "";
	Object.keys(config).forEach((key) => {
		writed += `${key}: ${config[key]};`;
	});

	if (fakeField) {
		writed += `
		background-color: rgb(231, 231, 231);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
		width: 100%;
		height: 64px;
		border-bottom: 2.5px solid rgba(0, 0, 0, 0.26);
		cursor: text;
		`;
	}

	return (
		<StyledDiv onClick={onClick} writed={writed}>
			{children}
		</StyledDiv>
	);
}
