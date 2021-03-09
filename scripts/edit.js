const titleEl = document.querySelector('input#note-title')
const bodyEl = document.querySelector('textarea#note-body')
const saveButton = document.querySelector('button#save-button')
const removeButton = document.querySelector('button#remove-button')
const editHistoryEl = document.querySelector('section#edit-history')

const noteId = location.hash.substring(1)
let notes = getNotes()

let note = notes.find((note) => {
	return note.id === noteId
})
let noteIndex = notes.findIndex((note) => {
	return note.id === noteId
})

const updatedAtEl = document.createElement('p')
const createdAtEl = document.createElement('p')

createdAtEl.textContent = `Created on ${getCreatedAt(note.createdAt)}`
createdAtEl.classList.add('created-at-element')
editHistoryEl.appendChild(createdAtEl)

updatedAtEl.textContent = getUpdatedAt(note.updatedAt)
updatedAtEl.classList.add('updated-at-element')
editHistoryEl.appendChild(updatedAtEl)

titleEl.value = note.title
titleEl.addEventListener('input', (e) => {
	note.title = e.target.value.trim()
})

note.body.length > 0
	? (bodyEl.value = note.body)
	: (bodyEl.placeholder = 'Add note description')

bodyEl.addEventListener('input', (e) => {
	note.body = e.target.value.trim()
})

saveButton.addEventListener('click', function (e) {
	note.updatedAt = moment().valueOf()
	saveNotes(notes)
	console.log(editHistoryEl)
	location.assign('index.html')
})

removeButton.addEventListener('click', (e) => {
	notes.splice(noteIndex, 1)
	saveNotes(notes)
	location.assign('index.html')
})
