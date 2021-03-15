import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function UIView({ children = "" }) {
	return <View style={styles}>{children}</View>;
}
