import github from "../imagenes/githubv2.png"
import email from "../imagenes/emailv2.png"
import linkedin from "../imagenes/linkedinv2.png"
import imgperfil from "../imagenes/imgperfil.jpg"

const NavbarDesktop = () => {
  return (
    <nav className="navdesktop">
      <div className="nombredesktop">
        <img src={imgperfil} alt="" />
        <h2>Sebastián Cioffi</h2>
      </div>
      <div className="navsecciones">
        <a href="#inicio">Inicio</a>
        <a href="#sobremi">Sobre mi</a>
        <a href="#quehago">Que hago</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="navsecredesdesktop">
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-cioffi-b56586239/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
        <a href="https://github.com/sebascioffi?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={github} className="deskgithub" alt="" /></a>
        <a href="mailto:sebacioffi12@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" /></a>
      </div>
    </nav>
  )
}

export default NavbarDesktop
