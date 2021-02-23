function getNotes() {
	const notes = JSON.parse(localStorage.getItem('notes'))

	return notes === null ? [] : notes
}

function saveNotes(notes) {
	// notes = notes.filter((note) => {
	//     return note.title !== '' && note.body !== ''
	// })

	localStorage.setItem('notes', JSON.stringify(notes))
} 

function getUpdatedAt(updatedAt) {
    return `Last updated ${moment(updatedAt).fromNow()}.`
}

function generateNoteDom(note) {
	const noteEl = document.createElement('a')
	const titleEl = document.createElement('p')
	const bodyEl = document.createElement('p')

	noteEl.setAttribute('href', `edit-page.html#${note.id}`)

	titleEl.textContent = note.title
	titleEl.classList.add('list-item__title')
    noteEl.appendChild(titleEl)
    
    bodyEl.textContent = getUpdatedAt(note.updatedAt)
    bodyEl.classList.add('list-item__updated-at')
    noteEl.appendChild(bodyEl)

	return noteEl
}

function renderNotes(notes, filters) {
	const notesEl = document.querySelector('div#notes')

	const filteredNotes = notes.filter((note) => {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase())
	})

	notesEl.innerHTML = ''

	if (notes.length === 0) {
		const emptyMessage = document.createElement('p')
		emptyMessage.textContent = 'You have no notes to show. Lets create one'
		notesEl.appendChild(emptyMessage)
	} else {
		filteredNotes.forEach(function (note) {
			const noteEl = generateNoteDom(note)
			notesEl.appendChild(noteEl)
		})
	}
}
