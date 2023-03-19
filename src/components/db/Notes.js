export function generateAccessKey() {
  return Math.floor(Math.random() * 900000)
}

const STORAGE_KEY = 'notes-with-userID'

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
  console.log('Storage created!')
}

export function getNotes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY))
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

export function getNoteById(id) {
  const notes = getNotes()
  const note = notes.find((note) => note.id === id)
  return note
}

export function addNote(note) {
  const notes = getNotes()
  const date = new Date()
  note.date = date.getTime()
  note.id = generateAccessKey()
  notes.push(note)
  saveNotes(notes)
}

export function updateNote(updatedNote) {
  const notes = getNotes()
  const index = notes.findIndex((note) => note.id === updatedNote.id)
  notes[index] = updatedNote
  saveNotes(notes)
}

export function deleteNote(id) {
  const notes = getNotes()
  const index = notes.findIndex((note) => note.id === id)
  notes.splice(index, 1)
  saveNotes(notes)
}

export function getNotesByUser(userID) {
  const notes = getNotes()
  const userNotes = notes.filter((note) => note.userID === userID)
  return userNotes
}

export function getNotesByAccessKey(accessKey) {
  const notes = getNotes()
  const userNotes = notes.filter((note) => note.accessKey === accessKey)
  return userNotes
}

export function getNotesByAdmin(adminID) {
  const notes = getNotes()
  const userNotes = notes.filter((note) => note.adminID === adminID)
  return userNotes
}

export function getNotesByEditor(editorID) {
  const notes = getNotes()
  const userNotes = notes.filter((note) => note.editorID === editorID)
  return userNotes
}
