import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import './index.css'

function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const loginRef = useRef()
  const passwordRef = useRef()

  const isValidForm = () => {
    if (!passwordRef.current.value) {
      alert("Senha é obrigatório")
      return false
    }
    if (!loginRef.current.value) {
      alert("Login é obrigatório")
      return false
    }
    return true
  }
  
  const path = location.state?.from?.pathname ?? '/'
  const handleLogin = (e) => {
    e.preventDefault()
    if(!isValidForm()) return
    signIn({
      login: loginRef.current.value,
      passwordRef: passwordRef.current.value
    })
    navigate(path, { replace: true })
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="input-field">
          <label htmlFor="login">Login</label>
          <input id="login" type="text" ref={loginRef}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <button className="btn-login" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login