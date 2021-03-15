export function GenerateFormikField(fieldName, formikConfig, use) {
	let changeProps;
	switch (use) {
		case "setFieldValue":
			changeProps = (value) => formikConfig.setFieldValue(fieldName, value);
			break;

		default:
			changeProps = formikConfig.handleChange;
			break;
	}

	return {
		name: fieldName,
		value: formikConfig.values[fieldName],
		error: formikConfig.errors[fieldName] && formikConfig.touched[fieldName],
		onBlur: formikConfig.handleBlur,
		onChangeText: (value) => formikConfig.setFieldValue(fieldName, value),
	};
}
