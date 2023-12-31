import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { readAllItem } from '../db/localUser'

const EditorDashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = readAllItem()
    if (user.role !== 'editor') {
      navigate('/')
    }
  })

  return (
    <div className="container-fluid h-25">
      <div className="row">
        <div className="col-md-3 fixed-top h-auto">
          <h1 className="py-2">Editor Dashboard</h1>
          <hr />
          <nav>
            <ul>
              <li>
                <h3>
                  <Link to="">Dashboard</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="notes">All Notes</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="assignUser">Assign to User</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="/logout">Logout</Link>
                </h3>
              </li>
              <hr />
            </ul>
          </nav>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default EditorDashboard
