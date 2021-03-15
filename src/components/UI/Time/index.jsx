import React, { useState, useEffect, useCallback } from "react";
import { TimePickerModal } from "react-native-paper-dates";
import Box from "layout/Box";
import UIText from "../Text";
import Grid from "layout/Grid";

export default function UITime({
	onChange = () => {},
	placeholder = "",
	time = null,
}) {
	const [value, setValue] = useState(null);
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		onChange(value);
	}, [value]);

	const hanleChange = useCallback((params) => {
		setOpened(false);
		const time = new Date();
		time.setHours(params.hours);
		time.setMinutes(params.minutes);
		setValue(time);
	});

	return (
		<Box fakeField onClick={() => setOpened(true)}>
			<Grid container alignItens="center">
				<Grid item>
					<Box m="1rem" pt=".5rem">
						<Grid container>
							<UIText>{placeholder}</UIText>
							<Box pl=".5rem">
								<UIText color="var(--primary)" weight={500}>
									{String(
										time
											? new Date(time).toLocaleTimeString("pt-BR", {
													hour: "2-digit",
													minute: "2-digit",
											  })
											: ""
									)}
								</UIText>
							</Box>
						</Grid>
					</Box>
				</Grid>
			</Grid>
			<TimePickerModal
				visible={opened}
				onDismiss={() => setOpened(false)}
				date={value}
				onConfirm={hanleChange}
				animationType="fade"
				label="SELECIONAR TEMPO"
			/>
		</Box>
	);
}
