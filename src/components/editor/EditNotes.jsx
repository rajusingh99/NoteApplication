import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { deleteNote, getNoteById } from '../db/Notes'
import { Link, useNavigate } from 'react-router-dom'
import { updateNote } from '../db/Notes'
import { getUserRole } from '../db/localUser'

const EditNote = () => {
  const [title, editTitle] = React.useState('')
  const [description, editDescription] = React.useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const notes = getNoteById(id)
    // console.log(notes)
    if (notes === undefined || notes === null) {
      editTitle('Invalid ID')
      editDescription('Invalid ID')
    } else {
      editTitle(notes.title)
      editDescription(notes.description)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      title,
      description,
    }
    // console.log(id + ' ' + note)
    updateNote(id, note)
    navigate('/editor/notes')
  }
  return (
    <div className="container w-75">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Edit Notes</h1>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">
                      <h3>Title</h3>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      placeholder="Enter Title"
                      onChange={(e) => {
                        editTitle(e.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">
                      <h3>Description</h3>
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows="7"
                      onChange={(e) => {
                        editDescription(e.target.value)
                      }}
                      value={description}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger btn-block mt-3 m-2"
                  >
                    Update Notes
                  </button>
                  <Link
                    to={
                      getUserRole() === 'editor'
                        ? '/editor/notes'
                        : '/admin/ViewAllNotes'
                    }
                    className="btn btn-primary btn-block mt-3 m-2"
                  >
                    Go Back to Notes
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditNote
