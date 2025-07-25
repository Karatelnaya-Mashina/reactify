function getDay(date) {
	let day = date.getDay();
	if (day === 0) day = 7;
	return day - 1;
}

function createCalendar(elem, year, month) {
	elem = document.querySelector(elem);

	let mon = month - 1;
	let d = new Date(year, mon);

	let table = `
	<table>
	<caption>${month}.${year}</caption>
		<tr>
			<th>mon</th>
			<th>tue</th>
			<th>wed</th>
			<th>thu</th>
			<th>fri</th>
			<th>sat</th>
			<th>sun</th>
		</tr>
		<tr>

	`;

	for (let i = 0; i < getDay(d); i++) {
		table += '<td></td>';
	}

	while (d.getMonth() == mon) {
		table += '<td>' + d.getDate() + '</td>';
		if (getDay(d) % 7 == 6) {
			table += '</tr><tr>';
		}
		d.setDate(d.getDate() + 1);
	}
	if (getDay(d) != 0) {
		for (let i = getDay(d); i < 7; i++) {
			table += '<td></td>';
		}
	}
	table += '</tr></table>';
	elem.innerHTML = table;
}

createCalendar('body', 2025, 5);
