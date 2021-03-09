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

function getCreatedAt(createdAt) {
	return moment(createdAt).format('LL')
}

function generateNoteDom(note) {
	const noteElLink = document.createElement('a')
	const noteEl = document.createElement('div')
	const createdAtEl = document.createElement('p')
	const titleEl = document.createElement('p')
	const updatedAtEl = document.createElement('p')

	noteEl.classList.add('note-element')

	noteElLink.setAttribute('href', `edit-page.html#${note.id}`)

	createdAtEl.textContent = getCreatedAt(note.createdAt)
	createdAtEl.classList.add('note-element__created-at')
	noteEl.appendChild(createdAtEl)

	titleEl.textContent = note.title
	titleEl.classList.add('note-element__title')
	noteEl.appendChild(titleEl)

	updatedAtEl.textContent = getUpdatedAt(note.updatedAt)
	updatedAtEl.classList.add('note-element__updated-at')
	noteEl.appendChild(updatedAtEl)

	noteElLink.appendChild(noteEl)

	return noteElLink
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
	const notesContainerEl = document.querySelector('section#notes-contianer')

	notes = sortNotes(notes, filters)

	const filteredNotes = notes.filter((note) => {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase())
	})

	notesEl.innerHTML = ''

	if (notes.length === 0) {
		const emptyMessage = document.createElement('p')
		emptyMessage.textContent = 'You have no notes to show.'
		emptyMessage.classList.add('empty-message')
		notesContainerEl.appendChild(emptyMessage)
	} else {
		filteredNotes.forEach(function (note) {
			const noteEl = generateNoteDom(note)
			notesEl.appendChild(noteEl)
		})
	}
}
