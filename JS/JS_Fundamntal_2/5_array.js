//Task 1

let queue = [];

queue.push('Первый', 'Второй', 'Третий');
console.log(queue); // После добавления "Первый", "Второй", "Третий"
queue.shift();
console.log(queue); // ["Второй", "Третий"]
queue.shift();
console.log(queue); // ["Третий"]

//Task 2
let stack = ['a', 'b', 'c'];
stack.push('d');
console.log(stack); // ["a", "b", "c", "d"]
console.log(stack.pop()); // ('d');
console.log(stack.pop()); // 'c'
console.log(stack); // ['a', 'b']

//Task 3
let numbers = [3, 5, 7];
numbers.unshift(1);
numbers.push(9);
console.log(numbers.shift());
console.log(numbers.pop());
console.log(numbers);

//Task 4
let fruits = ['Апельсин', 'Яблоко', 'Груша'];
fruits.unshift('Банан');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Киви');
console.log(fruits);
fruits.shift();
console.log(fruits);

//Task 5
let data = [1, 2, 3];
data.push(4, 5);
console.log(data);
console.log(data.shift());
data.unshift(0);
console.log(data);
console.log(data.pop());
console.log(data);

//Task 6
let colors = ['Красный', 'Зелёный', 'Синий'];
colors.shift();
colors.push('Жёлтый');
console.log(colors);
colors.pop();
colors.unshift('Фиолетовый');
console.log(colors);
colors.shift();
console.log(colors);
