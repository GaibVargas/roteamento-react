import { useAuth } from "../../hooks/useAuth"

import './index.css'

function Header({}) {
  const { user, signOut } = useAuth()

  return (
    <header>
      <h1>{ user.login }</h1>
      <button onClick={signOut}>Logout</button>
    </header>
  )
}

export default Header