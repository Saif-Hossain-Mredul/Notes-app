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
	const noteEl = document.createElement('div')
	const noteElLink = document.createElement('a')
	const titleEl = document.createElement('p')
	const bodyEl = document.createElement('p')

	noteElLink.setAttribute('href', `edit-page.html#${note.id}`)
	noteEl.classList.add('note-element')

	titleEl.textContent = note.title
	titleEl.classList.add('list-item__title')
	noteElLink.appendChild(titleEl)

	bodyEl.textContent = getUpdatedAt(note.updatedAt)
	bodyEl.classList.add('list-item__updated-at')
	noteElLink.appendChild(bodyEl)

	noteEl.appendChild(noteElLink)

	return noteEl
}

function sortNotes(notes, filters) {
	if (filters.sortBy === 'byCreated') {
		return notes.sort((a, b) => a.createdAt - b.createdAt)
	} else if (filters.sortBy === 'byEdited') {
		return notes.sort((a, b) => b.updatedAt - a.updatedAt)
	} else {
		return notes.sort((a, b) => {
			const first = a.title
			const second = b.title

			if (first > second) {
				return 1
			} else if (first < second) {
				return -1
			} else return 0
		})
	}
}

function renderNotes(notes, filters) {
	const notesEl = document.querySelector('div#notes')

	notes = sortNotes(notes, filters)

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
