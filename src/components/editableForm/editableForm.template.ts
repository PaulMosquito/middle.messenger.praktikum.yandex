export default `
if edit
    #{Form}
else
    .editable-form
        .editable-form__name=name
        .editable-form__value=value
`;