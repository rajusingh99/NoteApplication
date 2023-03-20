export function generateAccessKey() {
  return Math.floor(Math.random() * 900000)
}

const STORAGE_KEY = 'notes-data'

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
  console.log('Storage created!')
}

export function readAllItem() {
  const serializedItems = localStorage.getItem(STORAGE_KEY)
  return serializedItems ? JSON.parse(serializedItems) : []
}

export function saveItems(items) {
  const serializedItems = JSON.stringify(items)
  localStorage.setItem(STORAGE_KEY, serializedItems)
}

export function clearItems() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getUserRole() {
  const user = readAllItem()
  return user.role
}

export function getUserID() {
  const user = readAllItem()
  return user.id
}

export function getUserAccessKey() {
  const user = readAllItem()
  return user.access_key
}

// add new item to the object
export function addItem(item) {
  const items = readAllItem()
  items.push(item)
  saveItems(items)
}

// update item in the object
export function updateItem(item) {
  const items = readAllItem()
  const index = items.findIndex((i) => i.id === item.id)
  items[index] = item
  saveItems(items)
}
