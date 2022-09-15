import Layout from "../components/Layout";
import styles from '../styles/Estiloso.module.css';

const Estiloso = () => {
  return (
    <Layout titulo="exemplo de CSS modularizado2">
      <div className={styles.roxo}>
        <h1>Estilo CSS usando Módulos</h1>
      </div>
    </Layout>
  );
}

export default Estiloso;
