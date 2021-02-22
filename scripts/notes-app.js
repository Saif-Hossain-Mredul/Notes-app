let notes = []

document.querySelector('button#add-note').addEventListener('click', function(e) {
    notes.push({
        title : 'new note'
    })

    renderNotes(notes)
})