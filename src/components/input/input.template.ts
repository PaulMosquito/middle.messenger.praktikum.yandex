export default `
fieldset.input-form(title=title)
	#{InputForm}
	legend.input-form__legend=name
	if error
		span.input-form__error=error
	else 
		span
`;
