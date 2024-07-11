import barramenus from "../imagenes/barramenus.png"
import cruz from "../imagenes/cerrar.png"
import linkedinv2 from "../imagenes/linkedinv2.png"
import githubv2 from "../imagenes/githubv2.png"
import emailv2 from "../imagenes/emailv2.png"
import "../estilos/global.css"
import { useState } from "react"

const NavbarPhone = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navphone">
      <div className="nombre">
        <h2>Sebastián Cioffi</h2>
      </div>
      <div className="navsecredes">
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-cioffi-b56586239/" target="_blank" rel="noopener noreferrer"><img src={linkedinv2} alt="" width={"22px"} height={"22px"}/></a>
        <a href="https://github.com/sebascioffi?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={githubv2} alt="" width={"22px"} height={"22px"} /></a>
        <a href="mailto:sebacioffi12@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailv2} alt="" width={"22px"} height={"22px"} /></a>

        {menuAbierto ? (
          <>
          <img src={cruz} alt="" width={"32px"} height={"32px"} className={`menu-icon barraphone ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu} />
          <div className="seccionesphone">
            <a href="#inicio" className="phonesec" onClick={toggleMenu}>Inicio</a>
            <a href="#sobremi" className="phonesec" onClick={toggleMenu}>Sobre mi</a>
            <a href="#quehago" className="phonesec" onClick={toggleMenu}>Que Hago</a>
            <a href="#portfolio" className="phonesec" onClick={toggleMenu}>Portfolio</a>
            <a href="#contacto" className="phonesec contacto" onClick={toggleMenu}>Contacto</a>
          </div>
          </>
        ) : (
          <>
          <img src={barramenus} alt="" width={"32px"} height={"32px"} className={`menu-icon barraphone ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu} />
          {null}
          </>
        )}

      </div>
    </nav>
  )
}

export default NavbarPhone
