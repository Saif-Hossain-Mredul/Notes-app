const titleEl = document.querySelector('input#note-title')
const bodyEl = document.querySelector('textarea#note-body')
const saveButton = document.querySelector('button#save-button')
const removeButton = document.querySelector('button#remove-button')

const noteId = location.hash.substring(1)
let notes = getNotes() 


let note = notes.find((note) => {
	return note.id === noteId
})
let noteIndex = notes.findIndex((note) => {
    return note.id === noteId
})

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
    saveNotes(notes) 
    location.assign('index.html')
})

removeButton.addEventListener('click', (e) => {
    notes.splice(noteIndex, 1) 
    saveNotes(notes) 
    location.assign('index.html')
})
