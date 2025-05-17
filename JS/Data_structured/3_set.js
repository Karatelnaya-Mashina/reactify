const namesParticipantsConferences = new Set([
	'Igor',
	'Ivan',
	'Sasha',
	'Dasha',
	'Masha',
]);

function addParticipant(name) {
	return namesParticipantsConferences.add(name);
}
addParticipant('Petr');
addParticipant('Sasha');
addParticipant('Misha');
addParticipant('Kolya');
addParticipant('Marina');
addParticipant('Igor');
addParticipant('Ivan');

function getAllParticipants(listName) {
	return new Set([...listName]);
}

console.log(getAllParticipants(namesParticipantsConferences));

function deleteConferenceParticipant(participant) {
	return namesParticipantsConferences.delete(participant);
}

deleteConferenceParticipant('Igor');

console.log(getAllParticipants(namesParticipantsConferences));
