export default `
.user-info
    .user-info__photo
        .user-info__photo__sekeleton
            img(src="../../assets/photo.svg")
            #{PhotoIcon}

    .user-info__main
        #{FirstNameForm}
        #{SecondNameForm}
        #{LoginForm}
        #{MailForm}
        #{PhoneNumberForm}

    .user-info__buttons
        button.user-info__buttons__save-button="Apply"


    a(class="user-info__close" href="/account")
        #{CloseIcon}
`;