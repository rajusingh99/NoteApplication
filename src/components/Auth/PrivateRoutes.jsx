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
import AssignRole from '../Admin/AssignRole'
import ViewAllNotes from '../Admin/ViewAllNotes'
import AssignToUser from '../Editor/AssignToUser'
import ViewUserNotes from '../Users/ViewAllNotes'
import ViewNotes from '../Users/ViewNotes'
import Editor from '../Editor'
import Users from '../Users'

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
          path="assignRole"
          element={<AssignRole />}
        />

        <Route
          path="ViewAllNotes"
          element={<ViewAllNotes />}
        />

        <Route
          path="ViewAllNotes/addNote"
          element={<AddNotes />}
        />
        <Route
          path="ViewAllNotes/editNote/:id"
          element={<EditNote />}
        />
        <Route
          path="ViewAllNotes/deleteNote/:id"
          element={<DeleteNote />}
        />
        <Route
          path="ViewAllNotes/deleteAllNotes"
          element={<DeleteAllNotes />}
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
          path=""
          element={< Users />}
        />
        <Route
          path="notes"
          element={<ViewUserNotes />}
        />
        <Route
          path="notes/viewNote/:id"
          element={<ViewNotes />}
        />
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
          path=""
          element={<Editor />}
        />
        <Route
          path="notes"
          element={<ShowNotes />}
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
          path="assignUser"
          element={<AssignToUser />}
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
