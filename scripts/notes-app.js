let notes = getNotes() 

renderNotes(notes)

document.querySelector('button#add-note').addEventListener('click', function(e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title : 'Unnamed',
        body: '', 
    })  

    saveNotes(notes)
    location.assign(`edit-page.html#${id}`)
})