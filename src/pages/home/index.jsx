import React, { useCallback } from "react";
import BottomNav from "components/Navigation/BottomNav/index";

import UIView from "components/UI/View/index";

import MainHomeScreen from "./screens/main";
import AllHomeScreen from "./screens/all";
import AddHomeScreen from "./screens/add";

export default function Home() {
	const items = [
		{
			key: "home",
			title: "Home",
			icon: "home",
			children: MainHomeScreen,
		},
		{
			key: "schedule",
			title: "Meus itens",
			icon: "format-list-checks",
			children: AllHomeScreen,
		},
		{
			key: "program",
			title: "Agendar",
			icon: "calendar-plus",
			children: AddHomeScreen,
		},
	];

	return (
		<UIView>
			<BottomNav items={items} />
		</UIView>
	);
}
