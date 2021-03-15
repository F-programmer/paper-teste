import React from "react";
import { Appbar } from "react-native-paper";

function Navbar({ navigation, previous }) {
	return (
		<div id="navbar">
			<Appbar.Header>
				{previous ? (
					<Appbar.BackAction onPress={navigation.goBack} />
				) : null}
				<Appbar.Content title="Agenda Agora" />
			</Appbar.Header>
		</div>
	);
}

export default Navbar;
