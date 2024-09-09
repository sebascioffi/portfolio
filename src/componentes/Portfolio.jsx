import React from 'react'
import urlshortener from "../imagenes/urlshortener.png"
import peliculas from "../imagenes/peliculas.png"
import movietracker from "../imagenes/movietracker.png"

const Portfolio = () => {
  return (
    <section className='sobremi' id='portfolio'>
      <div className="container">
        <h2 className="text">Mis trabajos</h2>
        <h3 className='aboutme'>PORTFOLIO</h3>
      </div>
      <div className='trabajos'>
      <div className='trabajo-item'>
          <img src={movietracker} alt="" width={"400px"} height={"220px"} />
          <div className='trabajo-texto'>
            <p className='trabajo-titulo'>Movie Tracker</p>
            <p>Te recomendamos películas en base a tus gustos y plataformas de preferencia</p>
            <div className='trabajo-enlaces'>
              <a className='visitar' href="https://movie-tracker-kappa.vercel.app/" target='_blank' rel='noreferrer'>Visitar web</a>
              <a className='vercodigo' href="https://github.com/sebascioffi/sipi_front/tree/main/SIPI" target='_blank' rel='noreferrer'>Ver código</a>
            </div>
          </div>
        </div>
        <div className='trabajo-item'>
          <img src={urlshortener} alt="" width={"400px"} height={"220px"} />
          <div className='trabajo-texto'>
            <p className='trabajo-titulo'>URL Shortener</p>
            <p>Acorta tus direcciones y orgánizalas en un solo lugar</p>
            <div className='trabajo-enlaces'>
              <a className='visitar' href="https://short-url-front-seven.vercel.app/" target='_blank' rel="noreferrer">Visitar web</a>
              <a className='vercodigo' href="https://github.com/sebascioffi/shortUrlFront" target='_blank' rel='noreferrer'>Ver código</a>
            </div>
          </div>
        </div>
        <div className='trabajo-item'>
          <img src={peliculas} alt="" width={"400px"} height={"220px"} />
          <div className='trabajo-texto'>
            <p className='trabajo-titulo'>Cineforum</p>
            <p>Busca películas según distintos criterios, mira su información y agrégala a tus favoritas</p>
            <div className='trabajo-enlaces'>
              <a className='visitar' href="https://cineforum.vercel.app/" target='_blank' rel='noreferrer'>Visitar web</a>
              <a className='vercodigo' href="https://github.com/sebascioffi/cineforum" target='_blank' rel='noreferrer'>Ver código</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
