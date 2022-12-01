import { createContext, useState } from 'react'

// localStorage usado para acesso direto a url
const initialState = JSON.parse(localStorage.getItem('user')) ?? { login: '' }

export const AuthContext = createContext(initialState)

function AuthProvider({ children }) {
  const [user, setUser] = useState(initialState)

  const signIn = ({ login, password }) => {
    setUser({ login })
    localStorage.setItem('user', JSON.stringify({ login }))
  }

  const signOut = () => {
    setUser({ login: '' })
    localStorage.removeItem('user')
  }
  
  const value = { user, signIn, signOut }
  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider