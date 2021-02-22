const titleEl = document.querySelector('input#note-title') 
const bodyEl = document.querySelector('textarea#note-body')
const saveButton = document.querySelector('button#save-button') 
const removeButton = document.querySelector('button#remove-button')

const noteId = location.hash.substring(1)
let notes = getNotes() 

let note = notes.find((note) => { 
    return note.id === noteId
})

titleEl.value = note.title.length > 0 ? note.title : 'Unnamed' 
titleEl.addEventListener('input', (e) => {
    console.log(e.target.value)
})

bodyEl.addEventListener('input', (e) => {
    console.log(e.target.value)
})

saveButton.addEventListener('click', function(e) {
    console.log(noteId) 
    console.log(note.title)
})
