const Header = (props) => {
  console.log(props.nome)
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}

export default Header;
