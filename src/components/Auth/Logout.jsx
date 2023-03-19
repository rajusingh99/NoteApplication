import React from 'react'
import { clearItems } from '../db/localUser'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  clearItems()
  return <Navigate to="/" />
}

export default Logout
