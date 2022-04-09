export const checkName = (str = ''):boolean => {
	const string = str.trim();

	if (!str.length) {
		return false;
	}

	for(let i = 0; i < string.length; i++ ) {
		if (!string[0].match(/^[А-ЯA-Z]/)) {
			return false;
		}

		if (string[0].match(/^[А-Я]/)) {
			if (i > 0) {
				if (!string[i].match(/[а-яА-ЯёЁ]|-/)) {
					return false;
				}
			}
		}

		if (string[0].match(/[A-Z]/)) {
			if (i > 0) {
				if (!string[i].match(/[a-zA-Z]|-/)) {
					return false;
				}
			}
		}
	}
	return true;
};


export const checkLogin = (str = ''):boolean => {
	const string = str.trim();

	if (string.length < 3 || string.length > 20) {
		return false;
	}

	if (string.match(/^\d+$/))  {
		return false;
	}

	for(let i = 0; i < string.length; i++ ) {
		if (!string[i].match(/[a-zA-Z]|-|_|\d/)) {
			return false;
		}
	}

	return true;
};

export const checkPassword = (str = ''):boolean => {
	const string = str.trim();

	if (string.length < 8 || string.length > 40) {
		return false;
	}

	if (string.match(/^\d+$/))  {
		return false;
	}

	for(let i = 0; i < string.length; i++ ) {
		if (!string[i].match(/[a-zA-Z]|-|_|\d/)) {
			return false;
		}
	}

	return true;
};

// От 10 до 15 символов, состоит из цифр в начале может быть "+"
export const checkPhone = (str =''):boolean => !!str.match(/^[+|\d]\d{10,15}$/);

// Не должен быть пустым
export const checkMessage = (str =''):boolean => !!str.match(/.+/);

/**
 * Латиница, может включать цифры, спецсимволы
 * Должен быть символ "@", три буквы после него и "."
 * @param str
 * @returns {boolean}
 */
export const checkEmail = (str = ''):boolean => !!str.match(/[\w-]@[a-zA-Z]{3}\./);
