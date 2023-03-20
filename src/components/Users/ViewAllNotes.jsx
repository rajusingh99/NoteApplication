import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNotesBySimpleUser } from '../db/Notes'

const ViewUserNotes = () => {
  const [notes, setNotes] = React.useState([])
  useEffect(() => {
    console.log(getNotesBySimpleUser())
    const notes = getNotesBySimpleUser()
    // console.log(notes)
    setNotes(notes)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">All Assign Notes</h1>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Notes ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Updated Date</th>
                      <th scope="col">View</th>
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
                            to={`/user/notes/viewNote/${note.id}`}
                          >
                            View
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

export default ViewUserNotes
