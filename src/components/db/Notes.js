export function generateAccessKey() {
  return Math.floor(Math.random() * 900000)
}

const STORAGE_KEY = 'notes-with-userID'

if (!localStorage.getItem(STORAGE_KEY)) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]))
  console.log('Storage created!')
}
