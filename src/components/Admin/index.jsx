import React from 'react'
import { readAllItems, readAllUsers } from '../db/Users'

const Admin = () => {
    const allUsers = readAllItems()
    console.log(allUsers)
    const admin = allUsers.filter((user) => user.role === 'admin')
    console.log("admin",admin)
    const editor = allUsers.filter((user) => user.role === 'editor')
    console.log(editor)
    const user = allUsers.filter((user) => user.role === 'user')
    console.log(user)
  return (
    <>
      {/* make a card to show admin editor and user uisng bootstrap 5 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>Admin</h3>
              </div>
              <div className="card-body">
                <h4>{admin.length}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>Editor</h3>
              </div>
              <div className="card-body">
                <h4>{editor.length}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>User</h3>
              </div>
              <div className="card-body">
                <h4>{user.length}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
