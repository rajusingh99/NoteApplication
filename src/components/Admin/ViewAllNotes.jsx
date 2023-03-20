import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserRole } from '../db/localUser'
import { getNotes } from '../db/Notes'
import { getUserNameById } from '../db/Users'

const ViewAllNotes = () => {
  const [notes, setNotes] = React.useState([])
  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">All admin and User Notes</h1>
          <Link
            className="btn btn-primary m-2"
            to="addNote"
          >
            Add Notes
          </Link>
          <Link
            className="btn btn-danger m-2"
            to="deleteAllNotes"
          >
            Clear All Notes of All admin
          </Link>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Notes ID</th>
                      <th scope="col">User ID</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Updated Date</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notes.map((note) => (
                      <tr key={note.id}>
                        <th scope="row">{note.id}</th>
                        <td>{note.userID ? note.userID : 'Guest'}</td>
                        <td>{getUserNameById(note.userID)}</td>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>{note.date}</td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={`/admin/viewAllNotes/editNote/${note.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            className="btn btn-danger"
                            to={`/admin/viewAllNotes/deleteNote/${note.id}`}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllNotes
