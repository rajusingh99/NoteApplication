import React from 'react'
import { addNote } from '../db/Notes'

const AddNote = () => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      title,
      description,
    }
    console.log(note)
    addNote(note)
    setTitle('')
    setDescription('')
  }
  return (
    <div className="container w-75">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Add Notes</h1>
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
                        setTitle(e.target.value)
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
                        setDescription(e.target.value)
                      }}
                      value={description}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                  >
                    Add Notes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNote
