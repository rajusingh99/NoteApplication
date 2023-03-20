import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { readAllItem } from '../db/localUser'

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = readAllItem()
    if (user.role !== 'admin') {
      navigate('/')
    }
  })

  return (
    <div className="container-fluid">
      <div className="row">
        {/* <div className=""> */}
        <div className="col-md-3">
          <h1 className="py-2">Admin Dashboard</h1>
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
                  <Link to="assignRole">Assign Role</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="admin">Admin info</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="editor">Editor Info</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="users">User info</Link>
                </h3>
              </li>
              <hr />
              <li>
                <h3>
                  <Link to="viewAllNotes">View All Notes</Link>
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
        {/* </div> */}
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
