import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingInline: 50 }}>
        { children }
      </main>
    </>
  )
}

export default Layout