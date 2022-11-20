import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({ children }) => {
  let auth = sessionStorage.getItem('todo_user')

  if (!auth) {
    return (
      <Navigate to="/login" />
    )
  }

  return children
}