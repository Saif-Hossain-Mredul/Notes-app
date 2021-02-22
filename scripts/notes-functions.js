function generateNoteDom(note) {
    const noteEl = document.createElement('a')
    const titleEl = document.createElement('p') 

    titleEl.textContent = note.title 
    titleEl.classList.add('list-item__title')
    noteEl.appendChild(titleEl)

    return noteEl
}

function renderNotes (notes) {
    const notesEl = document.querySelector('div#notes')

    notesEl.innerHTML = ''
    notes.forEach(function(note) {
        const noteEl = generateNoteDom(note)
        notesEl.appendChild(noteEl)
    });
}