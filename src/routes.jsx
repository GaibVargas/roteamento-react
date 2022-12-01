import { createBrowserRouter  } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Content from './screens/Content'
import Login from './screens/Login'
import Profile from './screens/Profile'

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Profile />
      </RequireAuth>
    ),
  },
  {
    path: '/content',
    element: (
      <RequireAuth>
        <Content />
      </RequireAuth>
    ),
  },
])