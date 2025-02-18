{
	// Что будет выведено в консоль

	console.log(null ?? 0 ?? 'Привет'); //  0
	console.log(null || 0 || 'Привет'); // Привет
	console.log(null && 0 && 'Привет'); // null

	let x = 3;
	let y = 5;

	console.log(x > 2 || (y < 6 && x === 3)); // true
	console.log(0 ?? undefined ?? null ?? 10); // 0
	console.log(0 || undefined || null || 10); // 10

	let isMember = true;
	let isPremium = false;

	console.log((isMember && isPremium) || !isPremium); // true
	console.log(!isMember || (isPremium && isMember)); // false

	let age = 16;
	let hasParentalConsent = true;

	if (age >= 18 || (age >= 16 && hasParentalConsent)) {
		// true
		console.log('Доступ разрешён'); // 1 Доступ разрешен <---
	} else {
		console.log('Доступ запрещён'); // 2
	}

	let firstName = null;
	let lastName = null;

	console.log(
		firstName ?? 'Имя не указано' + ' ' + lastName ?? 'Фамилия не указана'
	); //  Подловили))) приоритет ?? меньше чем + поэтому  Имя не указано null
}

{
	let age = 20;
	let hasTicket = false;
	let isVIP = true;

	// Напишите условие для проверки доступа
	// Пользователь должен быть старше 18 лет и иметь билет.
	// Если у него нет билета, но он VIP, доступ всё равно разрешён.

	if ((age > 18 && hasTicket) || isVIP) {
		//true
		console.log('Доступ разрешён'); // <---
	} else {
		console.log('Доступ запрещён');
	}
}

{
	let currentHour = 14;
	let isWeekend = false;
	let isHoliday = false;

	// Напишите условие, которое проверяет, работает ли сотрудник
	// Сотрудник работает с 9:00 до 18:00.
	// Он может не работать, если сегодня выходной или праздничный день.

	if (currentHour > 9 && currentHour < 18 && !(isWeekend || isHoliday)) {
		// оператор не
		console.log('Сотрудник работает'); // <---
	} else {
		console.log('Сотрудник отдыхает');
	}
}

{
	let personalDiscount = null;
	let couponDiscount = 10; // Скидка по купону в процентах
	let isVIP = true;

	// Если у пользователя есть персональная скидка, применить её.
	// Если нет персональной скидки, но есть купон, применить скидку по купону.
	// Если пользователь VIP, применить максимальную скидку (50%).
	// Если никаких скидок нет, вывести ​​​​"Скидка отсутствует"​​​​.

	if (personalDiscount || couponDiscount || isVIP) {
		console.log(
			`Ваша скидка: ${isVIP ? 60 : personalDiscount ?? couponDiscount}%` // тернарный оператор + оператор нулевого слияния
		);
	} else {
		console.log('Скидка отсутствует');
	}
}

{
	let isAuthorized = true;
	let isBanned = false;
	let isVerified = false;
	let isAdmin = true;

	// Напишите условие для проверки доступа
	// Авторизован (​​​​isAuthorized​​​​),
	// Не заблокирован (​​​​isBanned​​​​),
	// Прошёл верификацию (​​​​isVerified​​​​),
	// Или если он администратор (​​​​isAdmin​​​​).

	if ((isAuthorized && !isBanned && isVerified) || isAdmin) {
		console.log('Доступ разрешён');
	} else {
		console.log('Доступ запрещён');
	}
}

{
	let score1 = 85;
	let score2 = null;
	let score3 = 90;

	//Вывести средний балл пользователя с учётом значений по умолчанию.
	// Необходимо вывести средний балл пользователя, но если какая-то из переменных имеет значение null или undefined, вместо неё использовать значение по умолчанию 0.
	console.log(Math.round(((score1 ?? 0) + (score2 ?? 0) + (score3 ?? 0)) / 3)); // 58.333...
}
