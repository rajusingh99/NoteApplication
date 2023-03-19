import React from 'react'
import { generateAccessKey, saveItems, readAllItem } from '../db/localUser'
import { readAllItems } from '../db/Users'
import { useNavigate } from 'react-router-dom'

function checkUsernameAndPassword(email, password) {
  const userData = readAllItems()
  for (let i = 0; i < userData.length; i++) {
    console.log(userData[i].email)
    console.log(userData[i].password)
    if (userData[i].email === email && userData[i].password === password) {
      let user = userData[i]
      saveItems(user)
      return true
    }
  }
  return false
}

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    // const userData = readAllItems()
    // console.log(userData)
    console.log(email + ' ' + password)
    console.log(checkUsernameAndPassword(email, password))
    if (checkUsernameAndPassword(email, password)) {
      const user = readAllItem()
      const accessKey = generateAccessKey(user)
      let userObj = {
        ...user,
        accessKey: accessKey,
      }
      saveItems(userObj)
      console.log(userObj)
      if (user.role === 'admin') {
        navigate('/admin')
      } else if (user.role === 'editor') {
        navigate('/editor')
      } else if (user.role === 'user') {
        navigate('/user')
      }
    } else {
      alert('Invalid Username or Password')
    }
  }

  return (
    <div class="container text-center w-75 mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card">
            <div class="card-header">
              <h4>Login Page</h4>
            </div>
            <div class="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div class="mb-3">
                  <label
                    for="email"
                    class="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="password"
                    class="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
