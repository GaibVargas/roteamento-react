import { Link } from "react-router-dom"

import Layout from "../../components/Layout"
import { useAuth } from "../../hooks/useAuth"

function Profile() {
  const { user } = useAuth()

  return (
    <Layout>
      <h1>Bem vindo { user.login }!</h1>
      <Link to="/content">Ir para conteúdo</Link>
      <br />
      <a href="/content">Ir para conteúdo (a)</a>
    </Layout>
  )
}

export default Profile