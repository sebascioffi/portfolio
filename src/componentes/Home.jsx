import abajo2 from "../imagenes/abajo2.png"

const Home = () => {
  return (
    <header id="inicio">
        <div className="basics">
          <h2>Bienvenid@</h2>
          <h1>Soy Desarrollador Full Stack</h1>
          <h3>Capital Federal, Argentina</h3>
          <a href="#contacto" className="contactame">Contáctame</a>
          <a href="#sobremi" className="abajo"><img src={abajo2} alt="" /></a>
        </div>
    </header>
  )
}

export default Home
