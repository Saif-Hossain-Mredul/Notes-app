function getNotes() {
    const notes = JSON.parse(localStorage.getItem('notes'))  
   
    return notes === null ? [] : notes
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function generateNoteDom(note) {
    const noteEl = document.createElement('a')
    const titleEl = document.createElement('p')   
    const bodyEl = document.createElement('p')

    noteEl.setAttribute('href', `edit-page.html#${note.id}`)

    titleEl.textContent = note.title 
    titleEl.classList.add('list-item__title')
    noteEl.appendChild(titleEl)

    return noteEl
}

function renderNotes (notes) {
    const notesEl = document.querySelector('div#notes')

    notesEl.innerHTML = ''

    if(notes.length === 0) { 
        const emptyMessage = document.createElement('p') 
        emptyMessage.textContent = 'You have no notes to show. Lets create one' 
        notesEl.appendChild(emptyMessage)
    } else {
        notes.forEach(function(note) {
            const noteEl = generateNoteDom(note)
            notesEl.appendChild(noteEl)
        }); 
    }

    
}