import { useRouter } from 'next/router';
import Layout from "../../../components/Layout";

const ClienteProCodigo = () => {
  const router = useRouter()

  return(
    <Layout titulo="Navegação Dinâmica">
      <div>código = {router.query.codigo}</div>
      <div>Filial = {router.query.filial}</div>
    </Layout>
  )
}

export default ClienteProCodigo;
