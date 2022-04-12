export default (component='') => `
div.app2
	select
		option(id='/')='/'
		option(id='/auth')='/auth'
		option(id='/chat')='/chat'
		option(id='/account')='/account'
		option(id='/login')='/login'
		option(id='/edit-profile')='/edit-profile'
	${component}
`;