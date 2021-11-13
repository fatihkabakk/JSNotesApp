import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

const app = document.getElementById('app');
const view = new NotesView(app, {
	onNoteAdd() {
		console.log(view.inpTitle, view.inpBody);
	},
	onNoteEdit(newTitle, newBody) {
		console.log(newTitle, newBody);
	},
});

view.updateNoteList(NotesAPI.getAllNotes());
