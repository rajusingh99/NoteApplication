import React, { useState, useEffect } from 'react'
import { generateAccessKey } from '../db/localUser'
import { readAllItems, readAllUsers } from '../db/Users'
import { assignNotesToUser, getNotesByUser } from '../db/Notes'

const AssignToUser = () => {
  const [allNotes, setAllNotes] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [formState, setFormState] = useState({
    note: '',
    user: '',
  })
  useEffect(() => {
    const notes = getNotesByUser()
    const users = readAllUsers()
    setAllNotes(notes)
    setAllUsers(users)
  }, [])

  const handleAssignUserToNotes = (e) => {
    e.preventDefault()
    const { note, user } = formState
    console.log(formState)
    assignNotesToUser(note, user)
    setFormState({
      note: '',
      user: '',
    })
  }

  return (
    <>
      <h1>Assign Notes to User</h1>
      <form
        className="py-5 my-5"
        onSubmit={handleAssignUserToNotes}
      >
        <div className="form-group">
          <label htmlFor="note">
            <h3>Your all note</h3>
          </label>
          <select
            className="form-control"
            id="note"
            name="note"
            value={formState.note}
            onChange={(e) => {
              setFormState({
                ...formState,
                note: e.target.value,
              })
            }}
          >
            <option value="">Select Your Note</option>
            {allNotes.map((note) => (
              <option
                key={note.id}
                value={note.id}
              >
                {note.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user">
            <h3>All User</h3>
          </label>
          <select
            className="form-control"
            id="user"
            name="user"
            value={formState.user}
            onChange={(e) => {
              setFormState({
                ...formState,
                user: e.target.value,
              })
            }}
          >
            <option value="">Select User</option>
            {allUsers.map((user) => (
              <option
                key={user.id}
                value={user.id}
              >
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mt-2"
        >
          Notes Assign to This user
        </button>
      </form>
    </>
  )
}

export default AssignToUser
