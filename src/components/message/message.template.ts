export default `
div(class=isMe? 'message_right' : 'message_left')
    div(class=isMe? 'my-message' : 'other-message')
        span=message
        div.message-time=date
`;
