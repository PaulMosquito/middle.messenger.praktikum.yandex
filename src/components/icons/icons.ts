/* eslint-disable */
const ARROW = `
svg#arrowRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(fill='#fff' d='M0 5.2h11v1.6H0z')
  path(d='m7 1 4 5-4 5' stroke='#fff' stroke-width='1.6')
`;

const BASKET = `
svg#basketRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M10.5 0c.943 0 1.85.33 2.534.92.685.592 1.096 1.4 1.15 2.26l.005.19h5.96c.216 0 .423.075.58.21a.753.753 0 0 1 .269.515.734.734 0 0 1-.189.544.874.874 0 0 1-.544.28l-.116.007h-.904l-1.453 13.502a2.763 2.763 0 0 1-.937 1.77c-.533.47-1.23.753-1.97.796l-.2.006h-8.37c-.74 0-1.457-.24-2.022-.679a2.802 2.802 0 0 1-1.059-1.713l-.026-.18L1.754 4.925H.85a.9.9 0 0 1-.56-.192.761.761 0 0 1-.283-.48L0 4.148a.74.74 0 0 1 .21-.511.877.877 0 0 1 .526-.26L.85 3.37h5.96c0-.894.389-1.75 1.08-2.383C8.583.355 9.521 0 10.501 0Zm7.035 4.926H3.465l1.438 13.349c.032.298.175.576.406.788.231.212.536.345.862.375l.144.006h8.37c.681 0 1.26-.44 1.391-1.039l.023-.13 1.434-13.35h.002Zm-5.048 2.852a.9.9 0 0 1 .56.191.761.761 0 0 1 .283.48l.008.107v7.259a.743.743 0 0 1-.23.53.885.885 0 0 1-.563.245.906.906 0 0 1-.596-.172.764.764 0 0 1-.306-.497l-.008-.106v-7.26c0-.206.09-.404.25-.55a.894.894 0 0 1 .602-.227Zm-3.973 0a.9.9 0 0 1 .56.191.76.76 0 0 1 .283.48l.008.107v7.259a.743.743 0 0 1-.23.53.886.886 0 0 1-.563.245.906.906 0 0 1-.596-.172.764.764 0 0 1-.306-.497l-.008-.106v-7.26c0-.206.09-.404.25-.55a.894.894 0 0 1 .602-.227ZM10.5 1.556c-.498 0-.979.17-1.345.48A1.76 1.76 0 0 0 8.52 3.22l-.006.15h3.973c0-.482-.21-.944-.582-1.284a2.086 2.086 0 0 0-1.405-.531Z' fill='#000')
`;

const CHAT = `
svg#chatRoot(width=width height=height viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M21 14V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H10V5H5V19H19V14H21Z' fill='black')
  path(d='M21 7H17V3H15V7H11V9H15V13H17V9H21V7Z' fill='black')
`;

const CLOSE = `
svg#closeRoot(width=width height=height xmlns='http://www.w3.org/2000/svg' viewbox='0 0 460.775 460.775' style='enable-background:new 0 0 460.775 460.775' xml:space='preserve')
  path(d='M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z')
`;

const PENCIL = `
svg#pencilRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M0 15.25V19h3.75L14.81 7.94l-3.75-3.75L0 15.25ZM17.71 5.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z' fill='#FBFBFB')
`;

const PHOTO = `
svg#photoRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(fill-rule='evenodd' clip-rule='evenodd' d='M36 2H4a2 2 0 0 0-2 2v21.267l12.655-2.953A11.999 11.999 0 0 1 17.38 22h5.238c.918 0 1.832.105 2.726.314L38 25.267V4a2 2 0 0 0-2-2ZM4 0a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm6.91 14.546a3.636 3.636 0 1 0-.001-7.273 3.636 3.636 0 0 0 0 7.273Z' fill='#CDCDCD')
`;

const SETTING_DOTS = `
svg#setting_dotsRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  circle(cx='1.5' cy='2' r='1.5' fill='#1E1E1E')
  circle(cx='1.5' cy='8' r='1.5' fill='#1E1E1E')
  circle(cx='1.5' cy='14' r='1.5' fill='#1E1E1E')
`;

const SETTING = `
svg#settingRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M18.305.594H.695a.18.18 0 0 0-.18.18V2.21c0 .099.081.18.18.18h17.61a.18.18 0 0 0 .18-.18V.773a.18.18 0 0 0-.18-.18Zm0 14.015H.695a.18.18 0 0 0-.18.18v1.438c0 .098.081.18.18.18h17.61a.18.18 0 0 0 .18-.18v-1.438a.18.18 0 0 0-.18-.18Zm0-7.007H.695a.18.18 0 0 0-.18.18v1.437c0 .099.081.18.18.18h17.61a.18.18 0 0 0 .18-.18V7.78a.18.18 0 0 0-.18-.18Z' fill='#999')
`;

const SIGN_OUT = `
svg#sign-outRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='m10.59 11-2.3 2.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1.004 1.004 0 1 0-1.42 1.42L10.59 9H1a1 1 0 0 0 0 2h9.59ZM10 0a10 10 0 0 0-9 5.55 1.006 1.006 0 0 0 1.8.9A8 8 0 1 1 10 18a7.93 7.93 0 0 1-7.16-4.45 1.006 1.006 0 0 0-1.8.9A10 10 0 1 0 10 0Z' fill='#000')
`;

const UNREAD = `
svg#unreadRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M11.75 18.143H9.5L4.5 21v-2.857H1V1h20v6.286M5 5.571h3M5 9h6' stroke='#000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
  path(d='m13.5 14.714 3 2.857 4.5-6.285' stroke='#000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
`;

const USER = `
svg#userRoot(width=width height=height fill='none' xmlns='http://www.w3.org/2000/svg')
  path(d='M11 1C5.477 1 1 5.477 1 11s4.477 10 10 10 10-4.477 10-10S16.523 1 11 1Z' stroke='#000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
  path(d='M3.271 17.346S5.5 14.5 11 14.5s7.73 2.846 7.73 2.846M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z' stroke='#000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round')
`;

type Names = 'arrow' | 'basket' | 'chat' | 'close' | 'pencil' | 'photo' | 'setting' | 'settingDots' | 'signOut' | 'unread' | 'user';

export const ICONS: Record<Names, string>  = {
	arrow: ARROW,
	basket: BASKET,
	chat: CHAT,
	close: CLOSE,
	pencil: PENCIL,
	photo: PHOTO,
	setting: SETTING,
	settingDots: SETTING_DOTS,
	signOut: SIGN_OUT,
	unread: UNREAD,
	user: USER
};

export default {
	ARROW,
	BASKET,
	CHAT,
	CLOSE,
	PENCIL,
	PHOTO,
	SETTING_DOTS,
	SETTING,
	SIGN_OUT,
	UNREAD,
	USER
};