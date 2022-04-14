export default (Conversations: string) => `
div.chats 
	div.chats__title
		#{SettingModal}
		input.chats__title__search(placeholder="Search")
	div.chats__list
		div.chats__list__creating-chat
			#{CreatingChatModal}
		${Conversations}
`;
