import React from "react";

import Navbar from "../components/Navigation/Navbar/index";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/home/index";

const Stack = createStackNavigator();

function Routes() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="home"
					screenOptions={{
						header: (props) => <Navbar {...props} />,
					}}
				>
					<Stack.Screen name="home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

export default Routes;
