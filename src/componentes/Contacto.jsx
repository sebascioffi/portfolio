import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

  const form = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
  .sendForm('service_8mwnfie', 'template_9hggeag', form.current, {
    publicKey: 'vWGm5vPFUPitIQrwS',
  })
  .then(
    () => {
      console.log('SUCCESS!');
      alert("El email se envió correctamente")
      form.current.reset();
    },
    (error) => {
      console.log('FAILED...', error.text);
      alert("Hubo un error al enviar el email")
    },
  );
};


  return (
    <section className="sobremi quehago" id='contacto'>
      <div className="container">
        <h2 className="text">Escríbeme</h2>
        <h3 className='aboutme'>CONTACTO</h3>
      </div>
      <div className='contacto-seccion'>
        <h2>Envíame un email</h2>
        <form ref={form} className="contacto-form" onSubmit={handleSubmit}>
          <div className='nombre-email'>
          <div className="formsec">
              <input className="contacto-input" 
              required
              type="text" 
              placeholder="Nombre" 
              name="user_name"
              />
        </div>
        <div className="formsec">
            <input className="contacto-input" 
            required
            type="text"
            placeholder="Email"
            name="user_email"
            />
        </div>
        </div>
        <div className="formsec secmensaje">
            <input className="contacto-input inputmensaje"
            required
            type="text"
            placeholder="Mensaje"
            name="message"
            />
        </div>
        <button className='enviar-contacto'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contacto
