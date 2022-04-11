export default `
            div.conversation 
                div.conversation__logo
                    div.conversation__logo__icon
                            
                div.conversation__name-and-message
                    div.conversation__name-and-message__name=name
                    div.conversation__name-and-message__message=lastMessage

                div.conversation__unread-message-and-date
                    div.conversation__unread-message-and-date__date=lastMessageDate
                    if countUnreadMessages > 0 
                        div.conversation__unread-message-and-date__unread-messages
                            div.conversation__unread-message-and-date__unread-messages__count=countUnreadMessages > 99 ? '99+' : countUnreadMessages 
`