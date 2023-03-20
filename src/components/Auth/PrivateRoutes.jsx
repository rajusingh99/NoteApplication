import { Route, Routes } from 'react-router-dom'

// admin
import Admin from '../Admin'
import Dashboard from '../Admin/Dashboard'
import Login from './Login'
import NotFound from './NotFound'
import Logout from './Logout'

// user
import UserDashboard from '../Users/Dashboard'

// editor
import EditorDashboard from '../Editor/Dashboard'
import AdminInfo from '../Admin/AdminInfo'
import UserInfo from '../Admin/UserInfo'
import EditorInfo from '../Admin/EditorInfo'
import ShowNotes from '../Editor/ShowNotes'
import AddNotes from '../Editor/AddNotes'
import EditNote from '../Editor/EditNotes'
import DeleteNote from '../Editor/DeleteNotes'
import DeleteAllNotes from '../Editor/DeleteAllNotes'

function Navbar() {
  return (
    // simple login logout and not found page
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/logout"
        element={<Logout />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />

      {/* admin */}
      <Route
        path="/admin"
        element={<Dashboard />}
      >
        <Route
          path=""
          element={<Admin />}
        />
        <Route
          path="admin"
          element={<AdminInfo />}
        />
        <Route
          path="users"
          element={<UserInfo />}
        />
        <Route
          path="editor"
          element={<EditorInfo />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>

      {/* user */}
      <Route
        path="/user"
        element={<UserDashboard />}
      >
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>

      {/* editor */}
      <Route
        path="/editor"
        element={<EditorDashboard />}
      >
        <Route
          path="notes"
          element={<ShowNotes />}
        />
        <Route
          path="notes/addNote"
          element={<AddNotes />}
        />

        <Route
          path="notes/addNote"
          element={<AddNotes />}
        />
        <Route
          path="notes/editNote/:id"
          element={<EditNote />}
        />
        <Route
          path="notes/deleteNote/:id"
          element={<DeleteNote />}
        />
        <Route
          path="notes/deleteAllNotes"
          element={<DeleteAllNotes />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default Navbar
