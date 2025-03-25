// Проверка на подстроку Напишите функцию containsSubstring, которая принимает два аргумента: строку str и подстроку substr. Функция должна вернуть true, если str содержит substr, и false в противном случае.

const containsSubstring = (str, substr) => str.includes(substr);

console.log(containsSubstring('Hello, World!', 'World')); // true
console.log(containsSubstring('Hello, World!', 'world')); // false

// Поиск и замена Напишите функцию replaceFirstOccurrence, которая принимает три аргумента: строку str, подстроку search и подстроку replaceWith. Функция должна вернуть строку, в которой первое вхождение search заменено на replaceWith.

const replaceFirstOccurrence = (str, search, replaceWith) =>
	str.replace(search, replaceWith);

console.log(replaceFirstOccurrence('Hello, World!', 'World', 'JavaScript')); // 'Hello, JavaScript!'
console.log(
	replaceFirstOccurrence('Hello, World! World!', 'World', 'JavaScript')
); // 'Hello, JavaScript! World!'

// Извлечение подстроки Напишите функцию getSubstring, которая принимает строку str, начальный индекс start и конечный индекс end. Функция должна вернуть подстроку от start до end.

const getSubstring = (str, start, end) => str.substring(start, end);

console.log(getSubstring('Hello, World!', 7, 12)); // 'World'
console.log(getSubstring('Hello, World!', 0, 5)); // 'Hello'

// Объединение строк Напишите функцию joinStrings, которая принимает массив строк и объединяет их в одну строку, используя пробел в качестве разделителя.

const joinStrings = strings => strings.join(' ');

console.log(joinStrings(['Hello', 'World', 'from', 'JavaScript'])); // 'Hello World from JavaScript'

// Преобразование регистра Напишите функцию convertCase, которая принимает строку str и возвращает строку в нижнем регистре, если исходная строка содержит слово 'lowercase', и в верхнем регистре, если слово 'uppercase'.

const convertCase = str =>
	str.includes('lowercase') ? str.toLowerCase() : str.toUpperCase();

console.log(convertCase('This should be lowercase')); // 'this should be lowercase'
console.log(convertCase('This should be uppercase')); // 'THIS SHOULD BE UPPERCASE'

// Удаление пробелов Напишите функцию trimSpaces, которая принимает строку и возвращает её без начальных и конечных пробелов.

const trimSpaces = string => string.trim();

console.log(trimSpaces('   Hello, World!   ')); // 'Hello, World!'

// Поиск символа Напишите функцию findCharIndex, которая принимает строку и символ, и возвращает индекс первого вхождения символа в строке. Если символ не найден, вернуть -1.

const findCharIndex = (str, symb) => str.indexOf(symb);

console.log(findCharIndex('Hello, World!', 'W')); // 7
console.log(findCharIndex('Hello, World!', 'z')); // -1

// Сравнение строк Напишите функцию compareStrings, которая принимает две строки и возвращает true, если они равны (с учетом регистра), и false, если не равны.

const compareStrings = (str1, str2) => str1.startsWith(str2);

console.log(compareStrings('Hello', 'Hello')); // true
console.log(compareStrings('Hello', 'hello')); // false

// Извлечение символов Напишите функцию getLastCharacter, которая возвращает последний символ строки. Если строка пустая, вернуть null.

const getLastCharacter = str => (str.length !== 0 ? str.at(-1) : null);

console.log(getLastCharacter('Hello')); // 'o'
console.log(getLastCharacter('')); // null
