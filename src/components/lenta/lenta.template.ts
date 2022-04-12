export default (Messages:string) => `
div.lenta
	header.lenta__header
		div.lenta__header__logo
			div.lenta__header__logo__image
		div.lenta__header__name="Jordan"            
		#{ModalButton}

	main#lenta-conversation.lenta__conversation
		${Messages}
			
	footer.lenta__footer
		#{LentaMessage}
		#{Button}
`;
