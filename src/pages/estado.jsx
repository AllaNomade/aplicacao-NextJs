import { useState } from "react";
import Layout from "../components/Layout";

const estado = () => {
  const [numero, setNumero] = useState(0)


  const incrementar = () => {
    setNumero(numero += 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}

export default estado;
