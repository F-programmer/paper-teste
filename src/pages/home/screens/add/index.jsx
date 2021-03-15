import React from "react";
import { TextInput, Button } from "react-native-paper";

import Box from "layout/Box";
import Grid from "layout/Grid";
import UIText from "components/UI/Text";
import UIDate from "components/UI/Date";
import UITime from "components/UI/Time";
import { GenerateFormikField } from "utils/pages";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addItems, resetItems } from "store/modules/items/actions";

export default function MainHomeScreen() {
	const dispatch = useDispatch();
	// dispatch(resetItems());

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		setFieldValue,
		handleSubmit,
		resetForm,
	} = useFormik({
		initialValues: {
			title: "",
			timeStarts: "",
			timeEnds: "",
			dateStarts: "",
			dateEnds: "",
		},
		onSubmit: (fields) => {
			const array = Object.keys(fields).map((key) => fields[key]);
			if (array.filter((item) => item === "" || item === null).length <= 0) {
				dispatch(addItems(fields));
				resetForm();
			}
		},
	});

	const formikConfig = {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		setFieldValue,
	};

	return (
		<Box p="1rem">
			<Grid container>
				<Grid item xs={10}>
					<Box p="1rem">
						<UIText color="var(--primary)" weigh={500} size="22px">
							Adicionar itens
						</UIText>
						<Grid container>
							<Grid item xs={10}>
								<Box m=".5rem">
									<TextInput
										label="Título (opicional)"
										placeholder="Ex: Comida para a cachorra"
										{...GenerateFormikField("title", formikConfig)}
									/>
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Box m=".5rem">
									<UIDate
										placeholder="Começa (Data)"
										onChange={(value) => {
											setFieldValue("dateStarts", value);
											setFieldValue("dateEnds", "");
										}}
										date={values.dateStarts}
									/>
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Box m=".5rem">
									<UIDate
										placeholder="Termina (Data)"
										onChange={(value) =>
											setFieldValue("dateEnds", value)
										}
										minValue={values.dateStarts}
										date={values.dateEnds}
									/>
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Box m=".5rem">
									<UITime
										placeholder="Começa (Tempo)"
										onChange={(value) =>
											setFieldValue("timeStarts", value)
										}
										time={values.timeStarts}
									/>
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Box m=".5rem">
									<UITime
										placeholder="Termina (Tempo)"
										onChange={(value) =>
											setFieldValue("timeEnds", value)
										}
										time={values.timeEnds}
									/>
								</Box>
							</Grid>
							<Grid item xs={10}>
								<Button mode="contained" onPress={handleSubmit}>
									<Box p=".5rem">Adicionar</Box>
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}
