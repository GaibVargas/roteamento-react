import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function RequireAuth({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user.login) {
    return <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  }

  return children
}

export default RequireAuth