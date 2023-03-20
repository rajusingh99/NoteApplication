import React, { useState, useEffect } from 'react'
import { generateAccessKey } from '../db/localUser'
import { readAllItems } from '../db/Users'

const AssignRole = () => {
  const [items, setItems] = useState([])
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
  })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('items'))
    const data = readAllItems()
    if (data) {
      setItems(data)
    }
  }, [])

  const createItem = (item) => {
    const newItems = [...items, item]
    setItems(newItems)
    localStorage.setItem('items', JSON.stringify(newItems))
  }

  const readItem = (id) => {
    return items.find((item) => item.id === id)
  }

  const updateItem = (id, updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === id ? updatedItem : item
    )
    setItems(updatedItems)
    localStorage.setItem('items', JSON.stringify(updatedItems))
  }

  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id)
    setItems(filteredItems)
    localStorage.setItem('items', JSON.stringify(filteredItems))
  }

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  const handleAddItem = () => {
    const newItem = {
      id: generateAccessKey(),
      name: formState.name,
      username: formState.username,
      email: formState.email,
      password: formState.password,
      role: formState.role,
    }
    createItem(newItem)
    setFormState({
      id: '',
      name: '',
      username: '',
      email: '',
      password: '',
      role: '',
    })
  }

  const handleEditItem = (id) => {
    const item = readItem(id)
    setFormState({
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      password: item.password,
      role: item.role,
    })
    setIsEditing(true)
  }

  const handleUpdateItem = () => {
    const updatedItem = {
      id: formState.id,
      name: formState.name,
      username: formState.username,
      email: formState.email,
      password: formState.password,
      role: formState.role,
    }
    updateItem(formState.id, updatedItem)
    setIsEditing(false)
    setFormState({
      id: '',
      name: '',
      username: '',
      email: '',
      password: '',
      role: '',
    })
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setFormState({
      id: '',
      name: '',
      username: '',
      email: '',
      password: '',
      role: '',
    })
  }

  return (
    <div>
      <h2>Here is all Users you can assign roles individually</h2>
      <form>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="form-label"
            hidden
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            className="form-control"
            hidden
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            hidden
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="form-control"
            hidden
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            hidden
          >
            Password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            className="form-control"
            hidden
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="role"
            className="form-label"
          >
            Role:
          </label>
          <select
            name="role"
            id="role"
            value={formState.role}
            onChange={handleInputChange}
            className="form-control"
          >
            <option>Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={handleUpdateItem}
              className="btn btn-primary me-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleCancelEdit}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleAddItem}
            className="btn btn-primary"
          >
            Assign Role
          </button>
        )}
      </form>
      <table className="table table-hover table-bordered my-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Role</th>
            <th scope="col">Edit Notes</th>
            <th scope="col">Delete Notes</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleEditItem(item.id)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AssignRole
