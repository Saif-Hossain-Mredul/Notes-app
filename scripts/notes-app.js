let notes = getNotes() 
let filters = { 
    searchText: '', 
    sortBy: 'byCreated',
}

renderNotes(notes, filters)

const searchEl = document.querySelector('input#search-input')
searchEl.addEventListener('input', (e) => {
    filters.searchText = e.target.value

    renderNotes(notes, filters)

    console.log(filters.searchText)
})

document.querySelector('button#add-note').addEventListener('click', function(e) {
    const id = uuidv4() 
    const createdAt = moment()

    notes.push({
        id: id,
        title : 'Unnamed',
        body: '',  
        createdAt: createdAt, 
        updatedAt: createdAt,
    })  

    saveNotes(notes)
    location.assign(`edit-page.html#${id}`)
})