import iconodesign from "../imagenes/iconodesign.png"
import iconopc from "../imagenes/iconopc.png"
import iconobackend from "../imagenes/iconobackend.png"
import iconocandado from "../imagenes/iconocandado.png"

const QueHago = () => {
  return (
    <section className="sobremi quehago" id="quehago">
      <div className="container">
        <h2 className="text">Mis habilidades</h2>
        <h3 className='aboutme'>QUE HAGO</h3>
      </div>
      <div className="services">
        <div className="serv">
          <div className="graf">
            <img src={iconopc} width={"30px"} height={"30px"} alt="" />
          </div>
          <div className="grafdesc">
            <p className="titulograf">Diseño web</p>
            <p>Ofrezco soluciones creativas para cada proyecto, con un enfoque en el usuario y una atención meticulosa a los detalles.</p>
          </div>
        </div>
        <div className="serv">
          <div className="graf">
            <img src={iconobackend} width={"32px"} height={"32px"} alt="" />
          </div>
          <div className="grafdesc">
            <p className="titulograf">Desarrollo backend</p>
            <p>Tengo conocimiento y experiencia en la creación de la infraestructura sólida que impulsa el funcionamiento de aplicaciones web.</p>
          </div>
        </div>
        <div className="serv">
          <div className="graf">
            <img src={iconodesign} width={"30px"} height={"30px"} alt="" />
          </div>
          <div className="grafdesc">
            <p className="titulograf">Diseño UI/UX</p>
            <p>Me especializo en crear productos digitales con interfaces que sean accesibles y fáciles de usar.</p>
          </div>
        </div>
        <div className="serv">
          <div className="graf">
            <img src={iconocandado} width={"37px"} height={"37px"} alt="" />
          </div>
          <div className="grafdesc">
            <p className="titulograf">Seguridad de datos</p>
            <p>Tengo habilidades en identificación y mitigación de vulnerabilidades, protección de datos y cumplimiento de estándares de seguridad.</p>
          </div>
        </div>
      </div>
<p className="objetivoay">Mi objetivo es ayudarte a llevar tus ideas al siguiente nivel, creando productos digitales que superen tus espectativas. Estoy aquí para acompañarte en cada paso del proceso de desarrollo, desde la conceptualización hasta el lanzamiento, asegurándome de que cada detalle esté perfectamente alineado con tus objetivos.</p>
    </section>
  )
}

export default QueHago
