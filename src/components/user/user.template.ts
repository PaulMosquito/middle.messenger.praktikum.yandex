export default `
.user-info
    .user-info__photo
        .user-info__photo__sekeleton
            #{PhotoIcon}

    .user-info__main
        #{NameForm}
        #{LastNameForm}
        #{LoginForm}
        #{MailForm}
        #{PhoneNumberForm}

    .user-info__buttons
        #{EditProfileLink}
        #{ChangePasswordLink}
        #{SignOutLink}


    a(class="user-info__close" link="/account")
        #{CloseIcon}
`;