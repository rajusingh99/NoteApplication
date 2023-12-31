import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { readAllItem } from '../db/localUser'

const UserDashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const user = readAllItem()
    if (user.role !== 'user') {
      navigate('/')
    }
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 fixed-top h-auto">
          <h1 className="py-2">User Dashboard</h1>
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

export default UserDashboard
