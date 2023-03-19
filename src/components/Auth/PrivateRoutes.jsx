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
import EditorDashboard from '../editor/Dashboard'
import AdminInfo from '../Admin/AdminInfo'
import UserInfo from '../Admin/UserInfo'
import EditorInfo from '../Admin/EditorInfo'

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
        <Route path="" />
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
        <Route path="" />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default Navbar
