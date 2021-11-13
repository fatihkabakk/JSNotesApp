export default class NotesAPI {
	static getAllNotes() {
		const notes = JSON.parse(localStorage.getItem('notesapp-notes') || '[]');

		return notes.sort((one, other) => {
			return new Date(one.updated) > new Date(other.updated) ? -1 : 1;
		});
	}

	static saveNote(noteToSave) {
		const notes = this.getAllNotes();
		const existing = notes.find((note) => note.id === noteToSave.id);

		if (existing) {
			existing.title = noteToSave.title;
			existing.body = noteToSave.body;
			existing.updated = new Date().toISOString();
		} else {
			noteToSave.id = Math.floor(Math.random() * 1000000);
			noteToSave.updated = new Date().toISOString();
			notes.push(noteToSave);
		}

		localStorage.setItem('notesapp-notes', JSON.stringify(notes));
		return existing ? existing : noteToSave;
	}

	static deleteNote(id) {
		const notes = this.getAllNotes();
		const newNotes = notes.filter((note) => note.id !== id);

		localStorage.setItem('notesapp-notes', JSON.stringify(newNotes));
	}
}
