import React from 'react'
import pdf from "../imagenes/Cv_Cioffi.pdf"

const SobreMi = () => {
  return (
    <section className='sobremi' id='sobremi'>
      <div className="container">
        <h2 className="text">Conóceme más</h2>
        <h3 className='aboutme'>SOBRE MI</h3>
      </div>
      <div className='sobremidatos'>
      <div className="quiensoy">
        <h3>Soy <strong className='sebastianstrong'>Sebastián Cioffi</strong>, desarrollador web freelance.</h3>
        <p>Soy un apasionado por la creación de soluciones tecnológicas innovadoras y funcionales. Mi principal fortaleza es la construcción de páginas web utilizando <strong className='sebastianstrong'>Node.js</strong>, con <strong className='sebastianstrong'>React</strong> para el frontend y <strong className='sebastianstrong'>Express</strong> para el backend. Esta combinación me permite desarrollar aplicaciones web robustas, escalables y eficientes, siempre con una experiencia de usuario impecable.</p>
        <p>Tengo experiencia trabajando con una variedad de bases de datos tanto <strong className='sebastianstrong'>SQL</strong> como <strong className='sebastianstrong'>NoSQL</strong>, lo que me proporciona flexibilidad para elegir la mejor solución según las necesidades específicas de cada proyecto. Además, tengo la capacidad de desarrollar aplicaciones móviles con <strong className='sebastianstrong'>React Native</strong>, ampliando así mi alcance para ofrecer productos digitales integrales y de alta calidad.</p>
      </div>
      <div className="datos">
        <p><strong>Título:</strong>Graduado de <strong className='tecnico'>Técnico Universitario en Desarrollo de Software</strong> en la Universidad Argentina de la Empresa UADE</p>
        <p className='pemail'><strong>Email:</strong> <a href="mailto:sebacioffi12@gmail.com" target="_blank" rel="noopener noreferrer">sebacioffi12@gmail.com</a></p>
        <p><strong>Edad:</strong> 21</p>
        <p><strong>Soy de:</strong> Buenos Aires, Argentina</p>
        <a a href={pdf} target="_blank" rel="noopener noreferrer" download="cv-cioffi">
  <button>Descargar CV</button>
</a>
      </div>
      </div>
    </section>
  )
}

export default SobreMi
