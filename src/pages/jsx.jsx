import Layout from "../components/Layout";

const jsx = () => {
  const titulo = <h1>JSX é um conceito Central</h1>

  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
      <p></p>
    </div>
    </Layout>
  )
}

export default jsx;
