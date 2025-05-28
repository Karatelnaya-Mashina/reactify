const text = document.getElementById('text');
text.textContent = 'Новый текст!';


const container = document.getElementById('container');
const newElem = document.createElement('p')
newElem.textContent = 'New'
container.append(newElem);

text.innerHTML += '<b>Жирный текст</b>';

const btn = document.getElementById('button');
// btn.outerHTML = '<strong>Кнопка удалена</strong>';

console.log(text.textContent);

const img = document.getElementById('image');
img.setAttribute('src', 'new-img.jp');

const link = document.getElementById('link');
console.log(link.getAttribute('href'));
link.removeAttribute('target');

link.setAttribute('title', 'Моя ссылка');

console.log(img.getAttribute('alt'));

btn.classList.add('active')
btn.classList.remove('btn')
text.classList.toggle('highlight')
btn.classList.add('primary', 'rounded')
text.style.color = 'blue'
img.style.width = '300px'
btn.style.cssText = ''
const whatColor = window.getComputedStyle(text)
console.log(whatColor.backgroundColor);

container.style.backgroundColor = '#f0f0f0'