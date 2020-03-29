 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	let sum = 0;

	for (let arg of arguments) {
		sum += arg;
	}

	return sum / arguments.length;
}

function sayHello(userName) {	
  return `Привет, мир! Меня зовут ${userName}`;
}

function calculateFormula() {
    
	let x = 2, y = 22, z = 0;
  let result = x * y + 5 * z + x - 1;
    
  return result;
}
