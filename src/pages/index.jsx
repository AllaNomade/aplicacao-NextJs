import Navegador from "../components/Navegador";

const Inicio = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh",
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" cor="brown" />
      <Navegador texto="Navegação" destino="/navegacao" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao1" cor="yellow" />
      <Navegador texto="navegação Dinâmina" destino="/cliente/sp-2/123" cor="pink" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="green" />
    </div>
  )
}

export default Inicio;
