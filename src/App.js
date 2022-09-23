
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Notes from './components/Notes.js'
import Footer from './components/Footer.js'
import AddNote from './components/AddNote.js'
import EditNote from './components/EditNote.js'
import Options from './components/Options.js'
import {notez} from './notes.json'

const App = () => {

	const [ showAddNote, setShowAddNote ] = useState(false)
	const [ showOptions, setShowOptions ] = useState(false)
	const [ showEditNote, setShowEditNote ] = useState(false)
	const [ showFooter, setShowFooter ] = useState(true)
	const [ notes, setNotes ] = useState([])
	const [ note, setNoti ] = useState([])

	useEffect(() => {
		const getNotes = () => {
			const notesFromServer = notez
			setNotes(notesFromServer)
		};

		getNotes()
	}, [])

	const onSearch = (searchWord) => {
		const filteredNotes = notez.filter(({ title }) => (title.toLowerCase()).includes(searchWord.toLowerCase()))
		setNotes(filteredNotes)
		if(searchWord.length>0) {
			setShowFooter(false)
		} else{
			setShowFooter(true)
		}
	}

	const onSave = (note) => {

		const id = Math.floor(Math.random() * 1000) + 1
		const newNote = { id, ...note}

		setNotes([...notes, newNote])
		notez.push(newNote)
		setShowAddNote(false)
	}

	const onDelete = (id) => {
		const filteredNotes = notez.filter((note) => note.id !== id)
		const deleteNote = notez.findIndex((note) => note.id === id)
		setNotes(notez.splice(deleteNote,1))
		setNotes(filteredNotes)
	}

	const setNote = (id) => {
		const requiredNote = notez.filter((note) => note.id === id)
		setNoti(requiredNote)
	}

	const onEdit = (editnote) => {
		const filteredNotes = notez.filter((note) => note.id !== editnote.id)
		setNotes([...filteredNotes, editnote])
		notez.length = 0
		notez.push(...filteredNotes, editnote)
		setShowEditNote(false)

	}

	const showAdd = () => setShowEditNote(true)


    

	return (
		<div className="notes-container" onClick={() => showOptions ? setShowOptions(false) : ''}>
			{ showAddNote ? <AddNote onClick={() => setShowAddNote(false)} onSave={onSave}  />: 
				showEditNote ? <EditNote 
				onClick={() => setShowEditNote(false)} onEdit={onEdit} editNote={note} /> :(
				<>
					<Header onSearch={onSearch} />
					{ 
						notes.length > 0 ? (<Notes notes={notes} showAdd={showAdd} setNote={setNote} onDelete={onDelete} />) : 
						( <h6>No Notes Found</h6>)}
					{showFooter && <Footer onClick={() => setShowAddNote(true)} disable={showOptions ? true : false} />}
				</>
			)}
			
			
		</div>
	)
}

export default App

