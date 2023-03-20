import { getUserID } from './localUser'
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
  // console.log(notes)
  for (let i = 0; i < notes.length; i++) {
    // console.log(notes[i])
    if (notes[i].id === undefined) {
      // console.log('undefined')
      continue
    }
    if (notes[i].id.toString() === id.toString()) {
      return notes[i]
    }
  }
  return null
}

export function addNote(note) {
  const notes = getNotes()
  note.date = getCurrentDateTimeString()
  note.id = generateAccessKey()
  note.userID = getUserID()
  // console.log(note)
  notes.push(note)
  saveNotes(notes)
}

function getCurrentDateTimeString() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export function updateNote(id, note) {
  // console.log('updateNote' + id + note.title + note.description)
  if (id === undefined) {
    // console.log('undefined')
    return null
  }
  const notes = getNotes()
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === undefined) {
      console.log('undefined')
      continue
    }
    if (notes[i].id.toString() === id.toString()) {
      note.id = id
      note.date = getCurrentDateTimeString()
      note.userID = getUserID()
      notes[i] = note
      // console.log(notes)
      saveNotes(notes)
      // return notes[i]
    }
  }
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

export function deleteAllNotesByUser() {
  const userId = getUserID()
  const notes = getNotes()
  const userNotes = notes.filter((note) => note.userID !== userId)
  saveNotes(userNotes)
}