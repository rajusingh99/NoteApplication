import React from 'react'
import { Link } from 'react-router-dom'
import { deleteAllNotesByUser } from '../db/Notes'

const DeleteAllNotes = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    deleteAllNotesByUser()
  }
  return (
    <div className="container w-75 py-5 my-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Delete All Notes</h1>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    className="btn btn-danger btn-block mt-3 m-2"
                  >
                    Are you sure You want to delete All Notes
                  </button>
                  <Link
                    to="/editor/notes"
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

export default DeleteAllNotes
