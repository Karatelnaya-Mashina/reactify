const clock = document.querySelector('#clock');
function update() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(update, 1000);
