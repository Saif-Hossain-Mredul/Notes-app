let notes = []

document.querySelector('button#add-note').addEventListener('click', function(e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title : 'new note',
        body: '', 
    }) 

    console.log(notes)

    renderNotes(notes)
})