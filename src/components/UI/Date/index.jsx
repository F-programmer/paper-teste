import React, { useState, useEffect, useCallback } from "react";
import { DatePickerModal } from "react-native-paper-dates";
import Box from "layout/Box";
import UIText from "../Text";
import Grid from "layout/Grid";

export default function UIDate({
	onChange = () => {},
	placeholder = "",
	minValue = null,
	date = null,
}) {
	const [value, setValue] = useState(null);
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		onChange(value);
	}, [value]);

	const handleConfirm = useCallback((params) => {
		setOpened(false);
		setValue(params.date);
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
										date
											? new Date(date).toLocaleDateString("pt-BR", {
													day: "2-digit",
													month: "2-digit",
													year: "numeric",
											  })
											: ""
									)}
								</UIText>
							</Box>
						</Grid>
					</Box>
				</Grid>
			</Grid>
			<DatePickerModal
				mode="single"
				visible={opened}
				onDismiss={() => setOpened(false)}
				date={value}
				onConfirm={handleConfirm}
				validRange={{
					startDate: new Date(minValue || Date.now()),
				}}
			/>
		</Box>
	);
}
