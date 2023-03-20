import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNotes } from '../db/Notes'

const ShowNotes = () => {
  const [notes, setNotes] = React.useState([])
  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">All Notes</h1>
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
            Clear All Notes Created By You
          </Link>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
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
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>{note.date}</td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={`/editor/notes/editNote/${note.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link
                            className="btn btn-danger"
                            to={`/editor/notes/deleteNote/${note.id}`}
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

export default ShowNotes
