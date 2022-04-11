export default (InputList: string, LinkList: string) => `
div.login-form
    div.login-form__wrapper
        #{Title}
        div.login-form__wrapper__inputs
            ${InputList}
        ${LinkList}  
`;
