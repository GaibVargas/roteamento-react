import { Link } from "react-router-dom"
import Layout from "../../components/Layout"

function Content() {
  return (
    <Layout>
      <h1>Conteúdo protegido</h1>
      <Link to="/">Ir para página inicial</Link>
      <br />
      <a href="/">Ir para página inicial (a)</a>
    </Layout>
  )
}

export default Content