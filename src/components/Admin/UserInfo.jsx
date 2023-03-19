import React, { useState, useEffect } from 'react'

const LocalStorageCRUD = () => {
  const [items, setItems] = useState([])
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    description: '',
  })
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('items'))
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
      id: Date.now(),
      name: formState.name,
      description: formState.description,
    }
    createItem(newItem)
    setFormState({
      id: '',
      name: '',
      description: '',
    })
  }

  const handleEditItem = (id) => {
    const item = readItem(id)
    setFormState({
      id: item.id,
      name: item.name,
      description: item.description,
    })
    setIsEditing(true)
  }

  const handleUpdateItem = () => {
    const updatedItem = {
      id: formState.id,
      name: formState.name,
      description: formState.description,
    }
    updateItem(formState.id, updatedItem)
    setIsEditing(false)
    setFormState({
      id: '',
      name: '',
      description: '',
    })
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setFormState({
      id: '',
      name: '',
      description: '',
    })
  }

  return (
    <div>
      <h2>Local Storage CRUD Example</h2>
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
            htmlFor="description"
            className="form-label"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            className="form-control"
          />
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
            Add
          </button>
        )}
      </form>
      <ul className="mt-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              {item.name} - {item.description}
            </span>
            <div>
              <button
                type="button"
                onClick={() => handleEditItem(item.id)}
                className="btn btn-primary me-2"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteItem(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LocalStorageCRUD
