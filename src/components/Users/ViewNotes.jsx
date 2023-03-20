import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNoteById, getNotesByUser } from '../db/Notes'

const ViewNotes = () => {
  const notesId = useParams()
  //   console.log(notesId)
  const data = getNoteById(notesId.id)
  console.log(data)
  return (
    <div>
      <h1>View Notes ID: {data.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.date}</p>
      <Link
        className="btn btn-primary"
        to="/user/notes"
      >
        Go Back to Notes
      </Link>
    </div>
  )
}

export default ViewNotes
