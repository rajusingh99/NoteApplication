import React from 'react'
import { Link } from 'react-router-dom'
import { getUserRole } from '../db/localUser'
import { clearAllNotes, deleteAllNotesByUser } from '../db/Notes'
import { useNavigate } from 'react-router-dom'

const DeleteAllNotes = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (getUserRole() === 'editor') {
      deleteAllNotesByUser()
      navigate('/editor/notes')
    } else if (getUserRole() === 'admin') {
      clearAllNotes()
      navigate('/admin/ViewAllNotes')
    } else {
      deleteAllNotesByUser()
      navigate('/user')
    }
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

export default DeleteAllNotes
