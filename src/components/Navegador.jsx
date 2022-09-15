import Link from "next/link";
import styles from "../styles/Navegador.module.css";

const Navegador = (props) => {
  return (
    <div>
      <Link href={props.destino}>
        <div className={styles.navegador} style={{
          backgroundColor: props.cor ?? 'cornflowerblue'}}>
        {props.texto ?? 'outro exemplo'}
        </div>
      </Link>
    </div>
  )
}

export default Navegador;
