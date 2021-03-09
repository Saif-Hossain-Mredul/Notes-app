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
})

const filterEl = document.querySelector('select#filter-by')
filterEl.addEventListener('change', (e) => {
	filters.sortBy = e.target.value

	renderNotes(notes, filters)
})

document
	.querySelector('button#add-note')
	.addEventListener('click', function (e) {
		const id = uuidv4()
		const createdAt = moment().valueOf()

		notes.push({
			id: id,
			title: 'Unnamed',
			body: '',
			createdAt: createdAt,
			updatedAt: createdAt,
		})

		saveNotes(notes)
		location.assign(`edit-page.html#${id}`)
	})
