const heatPointsPlayer = new WeakMap();
let alice = { name: 'Alice' };
let petr = { name: 'Petr' };
let misha = { name: 'Misha' };
let oks = { name: 'Oks' };

function addPlayer(player) {
	return heatPointsPlayer.set(player, 100);
}

function getHealth(player) {
	return heatPointsPlayer.get(player);
}

function damagePlayerHealth(player, damage) {
	if (heatPointsPlayer.has(player)) {
		let damageHealth = getHealth(player);
		damageHealth = damageHealth - damage;
		heatPointsPlayer.set(player, damageHealth);
	}
}

addPlayer(alice);
addPlayer(petr);
addPlayer(oks);
addPlayer(misha);

console.log(
	getHealth(alice),
	getHealth(petr),
	getHealth(oks),
	getHealth(misha)
);

console.log(heatPointsPlayer.has(misha));
misha = null;
console.log(heatPointsPlayer.has(misha));

damagePlayerHealth(oks, 20);

console.log(heatPointsPlayer.get(oks));

const userTrackingSystem = new WeakSet();

function addUser(user) {
	return userTrackingSystem.add(user);
}

function isUserActive(user) {
	return userTrackingSystem.has(user);
}

addUser(alice);
addUser(oks);
addUser(petr);

console.log(isUserActive(alice));

alice = null;

console.log(isUserActive(alice));
